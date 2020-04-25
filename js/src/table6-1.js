/**
 * http://www.dspguide.com/ch6/3.htm
 * Chapter 6, Table 6-1
 * CONVOLUTION USING THE INPUT SIDE ALGORITHM
 * @param {(number[]|TypedArray)} input sample buffer
 * @param {(number[]|TypedArray)} impulseResponse
 * @returns {(number[]|TypedArray)} output with the same type as input
 **/
function convolveInputSide(input, impulseResponse) {
  // create a new array, the same type as the input array
  const output = new (Object.getPrototypeOf(input).constructor)(
    // the length of the output array is the sum of the array lengths minus one
    input.length + impulseResponse.length - 1
  )

  // initialise the array with zeroes
  output.fill(0)


  input.forEach((sample, inputIndex) => {
    impulseResponse.forEach((impulseSample, impulseIndex) => {
      output[inputIndex + impulseIndex] += sample * impulseSample
    })
  })

  return output
}
