let x = 12
let y = x + 18

let numberOfBalls = add(x, y)

let result = double(numberOfBalls)

console.log(result)


function double(a) {
  return a * 2
}

function add(a, b) {
  return a + b
}