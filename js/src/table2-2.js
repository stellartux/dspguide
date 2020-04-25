/**
 * http://www.dspguide.com/ch2/2.htm
 * Chapter 2, Table 2-2
 * MEAN AND STANDARD DEVIATION USING RUNNING STATISTICS
 * @param {(number[]|TypedArray)} samples
 * @returns {Object[]} results
 * @returns {number} result.mean
 * @returns {number} result.standardDeviation
 **/
function meanAndStandardDeviationUsingRunningStatistics(samples) {
  // zero the running parameters
  let sum = 0
  let sumSquares = 0

  // an array to store the running statistics
  const results = []

  // loop through every sample
  samples.forEach((sample, index) => {
    // update the running parameters
    sum += sample
    sumSquares += sample * sample

    // calculate mean and standard deviation via Eq. 2-3
    const length = index + 1
    const mean = sum / length
    const standardDeviation =
      index > 0 ? Math.sqrt((sumSquares - sum ** 2 / length) / index) : 0

    // store the running statistics in the array of results
    results.push({ mean, standardDeviation })
  })

  return results
}
