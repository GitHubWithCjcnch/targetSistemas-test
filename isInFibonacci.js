import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

// um número só faz parte da sequência fibonacci se é ou não um quadrado perfeito
function perfectSquare(n) {
  const r = parseInt(Math.sqrt(n))
  return ( r * r == n )
}
function isInFibonacci(n) {
  if ((perfectSquare(5 * n * n + 4) || perfectSquare(5 * n * n - 4)) === true) {
    return `O número ${n} faz parte da sequência fibonacci`
  } else {
    return `O número ${n} não faz parte da sequência fibonacci`
  }
}

const rl = readline.createInterface({ input, output })
rl.question('Informe um número para calcular a sequência de fibonacci: ', (userInput) => {
  console.log(isInFibonacci(userInput))
  rl.close()
})
