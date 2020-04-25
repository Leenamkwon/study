for (var i = 0; i <= 10; i += 1) {
  console.log(i)
}
console.log(i)

for (let j = 0; j <= 10; j += 1) {
  console.log(j)
}
console.log(j)

for (let i = 0; i <= 10; i += 1) {
  for (let k = 0; k <= 10; k += 1) {
    console.log(`i: ${i}, j:${j}`)
  }
}

let number = 0

while (number < 10) {
  number += 1
}
