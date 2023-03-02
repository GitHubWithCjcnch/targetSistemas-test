import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

function invertString(str) {
  return str.split('').reverse().join('')
}

const rl = readline.createInterface({ input, output })
rl.question('digite uma palavra: ', (userInput) => {
  console.log(invertString(userInput))
  rl.close()
})
