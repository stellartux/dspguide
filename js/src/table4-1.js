/**
 * http://www.dspguide.com/ch4/4.htm
 * Chapter 4, Table 4-1
 * Program for demonstrating floating point error accumulation.
 * @param {number} iterations how many times to run the test
 **/
function demonstratingFloatingPointError(iterations = 100) {
  for (let i = 0; i < iterations; i++) {
    // initialise X
    let x = 1

    // load random numbers
    let a = Math.random()
    let b = Math.random()

    // add A and B to X
    x += a
    x += b

    // undo the additions
    x -= a
    x -= b

    // ideally, x should be 1, logs the result if it isn't
    console.assert(x === 1, `x = ${x}`)
  }
}
