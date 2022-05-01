const argv = require('minimist')(process.argv.slice(2))._
const help = () =>
  console.log(`
Usage: g [options]

Options:
  g -h,g -help \t help
  g l \t\t git log
  g s \t\t git status
  g a [...] \t git add . | [...]
  g c ... \t git commit -m ...
  g p [...] \t git push [...]
  g ... \t git ...
      `)

switch (argv[1]) {
  case 'a':
    await $`git add ${argv[2] || '.'}`
    break
  case 'c':
    await $`git commit -m ${argv[2] || ''}`
    break
  case 'p':
    await $`git push ${argv[2] || ''}`
    break
  case 's':
    await $`git status ${argv[2] || ''}`
    break
  case 'l':
    await $`git log ${argv[2] || '-5'}`
    break
  case '-h':
    help()
    break
  case '-help':
    help()
    break
  default:
    if (argv[1]) {
      argv[0] = ''
      argv.splice(0, 1)
      await $`git ${argv}`
      break
    } else {
      help()
    }
    break
}

