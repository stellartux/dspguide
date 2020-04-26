/**
 * http://www.dspguide.com/ch8/6.htm
 * Chapter 8, Table 8-2
 * THE DISCRETE FOURIER TRANSFORM
 * see also https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
 * for the WebAudio API built-in implementation
 * length of the samples array must be even
 * @param {number[]|TypedArray} samples the signal to be converted
 * @returns {object} result - the inputs converted to the frequency domain
 * @returns {number[]} result.real
 * @returns {number[]} result.imaginary
 **/
export function discreteFourierTransform(samples) {
  const length = samples.length / 2 + 1
  const real = new Array(length).fill(0)
  const imaginary = new Array(length).fill(0)

  for (let k = 0; k < length; k++) {
    samples.forEach((sample, i) => {
      // correlate samples[] with the cosine and sine waves, Eq. 8-4
      const coefficient = 2 * Math.PI * k * i / sample.length
      real[i] += sample * Math.cos(coefficient)
      imaginary[i] -= sample * Math.sin(coefficient)
    })
  }

  return { real, imaginary }
}
