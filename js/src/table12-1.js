/**
 * http://www.dspguide.com/ch12/1.htm
 * Chapter 12, Table 12-1
 * NEGATIVE FREQUENCY GENERATION
 * This function creates the complex frequency domain from the real frequency domain
 * @param {number[]} real part of the real frequency domain
 * @param {number[]} imaginary part of the real frequency domain
 * @returns {Object} result
 * @returns {number[]} result.real part of the complex frequency domain
 * @returns {number[]} result.imaginary part of the complex frequency domain
 */
export function negativeFrequencyGeneration(real, imaginary) {
  // the number of samples in the complex frequency domain
  const n = real.length * 2

  for (let k = real.length; k < n; k++) {
    real[k] = real[n - k]
    imaginary[k] = -imaginary[n - k]
  }

  return { real, imaginary }
}
