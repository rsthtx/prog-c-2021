
let names = ["Søren","Jens","Poul"]

names.push("peter")
names.push("bjarne")

console.log("### Indhold i array med en almindelig for løkke")
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(name)
}

console.log("### Indhold i array med brug af 'for...of'")
for (const name of names) {
  console.log(name)
}