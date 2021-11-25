console.log("Lav et program, der tæller nedad fra 10 til 1.")
{
  let i = 10
  while (i > 0) {
    i--;
    console.log(i)
    // i = i - 1
    // i -= 1
  }
}

for (let i = 10; i > 0; i--) {
  // do stuff
  console.log(i);
}

console.log("Lav et program, der udregner værdien af 1+2+3+ ... +20 med en løkke.")
let xSum = 0
for (let n = 1; n <= 20; n++) {
  // xSum = xSum + x
  xSum += n
}
console.log(xSum)

console.log("Lav et program, der udskriver 2-tabellen, 3-tabellen, .. op til 10-tabellen.")


for (let n = 2; n <= 10; n++) {

  console.log(n + "-tabellen")

  for (let m = 1; m <= 10; m++) {
    let result = n * m
    console.log(result)
  }

}

// console.log("2-tabellen")
// for(let i = 2; i <= 20; i += 2){
//   console.log(i)
// }

// console.log("3-tabellen")
// for(let i = 3; i <= 30; i += 3){
//   console.log(i)
// }

// console.log("4-tabellen")
// for(let i = 4; i <= 40; i += 4){
//   console.log(i)
// }

// Skriv et program, som for ligningen y=3*x*x+6*x+9 udskriver 
// værdierne af y for x=0, x=1,x= 2, x=3 ... x=10. 
// Ret det derefter til at skrive ud for x=0,x=10,x=20,x=30...x=100.

console.log("y=3*x*x+6*x+9")

console.log("opg a")
for (let i = 0; i <= 10; i++) {
  let x = i
  let y = 3 * x * x + 6 * x + 9
  console.log(x, y)
}

console.log("opg b")
for (let i = 0; i <= 10; i++) {
  let x = i * 10
  let y = 3 * x * x + 6 * x + 9
  console.log(x, y)
}

