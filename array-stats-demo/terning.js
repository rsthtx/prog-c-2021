// Lav et program, der simulerer kast med 6 terninger. 
// Der udføres f.eks. 100 kast. 
// Optæl i et array hyppigheden af summen af øjenantallene.

const args = process.argv.slice(2)
let numberOfDice = args[0] || 6
let numberOfSides = args[1] || 6
let numberOfThrows = args[2] || 100

let sums = []
// udfør et antal kast 
for (let i = 0; i < numberOfThrows; i++) {
  // Slå med seks 'terninger'
  let sum = 0
  for (let i = 0; i < numberOfDice; i++) {
    let value = Math.floor(Math.random() * numberOfSides) + 1
    sum = sum + value
  }
  sums.push(sum)
}

stats = {}
for (let i = 0; i < sums.length; i++) {
  const s = sums[i];
  stats[s] = (stats[s] || 0) + 1
}

console.log(stats)
