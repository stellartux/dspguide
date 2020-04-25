/**
 * http://www.dspguide.com/ch6/3.htm
 * Chapter 6, Table 6-1
 * CONVOLUTION USING THE OUTPUT SIDE ALGORITHM
 * @param {(number[]|TypedArray)} input sample buffer
 * @param {(number[]|TypedArray)} impulseResponse
 * @returns {(number[]|TypedArray)} output with the same type as input
 **/
function convolveOutputSide(input, impulseResponse) {
  // create output array initialised with zeroes
  const output = new (Object.getPrototypeOf(input).constructor)(
    input.length + impulseResponse.length - 1
  ).fill(0)

  output.forEach((_, index) => {
    impulseResponse.forEach((impulseSample, impulseIndex) => {
      // `|| 0` is used to zero out any out-of-bounds access
      output[index] += impulseSample * (input[index - impulseIndex] || 0)
    })
  })

  return output
}
