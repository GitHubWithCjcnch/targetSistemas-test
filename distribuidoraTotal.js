const estados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  outros: 19849.53
}

const totalMensal = estados.SP + estados.RJ + estados.MG + estados.ES + estados.outros;

function percentageTotal(total, value) {
  return Math.round(((value * 100) / total))
}

console.log(`a porcentagem de SP corresponde a: ${percentageTotal(totalMensal, estados.SP)}`)
console.log(`a porcentagem de SP corresponde a: ${percentageTotal(totalMensal, estados.RJ)}`)
console.log(`a porcentagem de SP corresponde a: ${percentageTotal(totalMensal, estados.MG)}`)
console.log(`a porcentagem de SP corresponde a: ${percentageTotal(totalMensal, estados.ES)}`)
console.log(`a porcentagem de SP corresponde a: ${percentageTotal(totalMensal, estados.outros)}`)