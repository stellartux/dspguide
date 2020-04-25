/**
 * http://www.dspguide.com/ch2/2.htm
 * Chapter 2, Table 2-1
 * CALCULATION OF THE MEAN AND STANDARD DEVIATION
 * @param {(number[]|TypedArray)} samples
 * @returns {Object} result
 * @returns {number} result.mean
 * @returns {number} result.standardDeviation
 **/
function calculateMeanAndStandardDeviation(samples) {
  // a helper function that adds all the elements of an array together
  const sum = array => array.reduce((a, b) => a + b, 0)

  // find the mean via Eq. 2-1
  const mean = sum(samples) / samples.length

  // find the standard deviation via Eq. 2-2
  const variance =
    sum(samples.map(sample => (sample - mean) ** 2)) / (samples.length - 1)

  const standardDeviation = Math.sqrt(variance)

  return { mean, standardDeviation, variance }
}
