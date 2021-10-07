function setup() {
  createCanvas(400, 500)
  text("Output is in the console", 20, 20)

  console.log("Loop demo");
  
  console.log("While loop");
  // initialization
  let i = 0
  
  while (i < 5) {
    console.log("while demo " + i);
    
    // increment
    i = i + 1
  }
  console.log("done");
  
  console.log("For loop");
  for (let i = 0; i < 3; i++) {
    console.log("for loop " + i);
  }
  console.log("done");

  console.log("Nested for loop");
  for (let i = 0; i < 3; i++) {
    console.log("outer " + i);
    for (let j = 0; j < 4; j++) {
      console.log(" inner " + j);
    } 
  }
  console.log("done");
}
