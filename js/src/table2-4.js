/**
 * http://www.dspguide.com/ch2/4.htm
 * Chapter 2, Table 2-4
 * CALCULATION OF BINNED HISTOGRAM
 * @param {(number[]|TypedArray)} samples
 * @returns {number[]} histogram
 **/
function calculateBinnedHistogram(samples, bins = 1000, maxValue = 10) {
  // create a histogram with as many bins as we need and zero it
  const histogram = Array(bins).fill(0)

  // calculate the histogram
  samples.forEach(sample => {
    const binNumber = Math.floor((sample * bins) / maxValue)
    histogram[binNumber]++
  })

  return histogram
}
