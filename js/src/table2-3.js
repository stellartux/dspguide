/**
 * http://www.dspguide.com/ch2/4.htm
 * Chapter 2, Table 2-3
 * CALCULATION OF THE HISTOGRAM, MEAN, AND STANDARD DEVIATION
 * @param {Uint8Array} samples
 * @returns {Object} result
 * @returns {number} result.histogram
 * @returns {number} result.mean
 * @returns {number} result.standardDeviation
 * @returns {number} result.variance
 **/
function meanStandardDeviationAndHistogram(samples) {
  // make a histogram with 256 buckets and fill it with zeroes
  const histogram = Array(256).fill(0)

  // calculate the histogram
  samples.forEach(sample => histogram[sample]++)

  // calculate the mean via Eq. 2-6
  const mean =
    histogram.reduce((total, sample, index) => total + sample * index, 0) /
    samples.length

  // calculate the standard deviation via Eq. 2-7
  const variance =
    histogram.reduce(
      (total, sample, index) => total + sample * (index - mean) ** 2,
      0
    ) /
    (samples.length - 1)

  const standardDeviation = Math.sqrt(variance)

  // return the calculated results
  return { histogram, mean, standardDeviation, variance }
}
