/**
 * http://www.dspguide.com/ch12/3.htm
 * COMPLEX DFT BY CORRELATION
 * @param {Object} timeData
 * @param {number[]|TypedArray} timeData.real
 * @param {number[]|TypedArray} timeData.imaginary
 * @returns {Object} frequencyData
 * @returns {number[]|TypedArray} frequencyData.real
 * @returns {number[]|TypedArray} frequencyData.imaginary
 */
export function complexDftByCorrelation(timeData) {
  // set constants
  const InputType = Object.getPrototypeOf(timeData.real).constructor
  const n = timeData.real.length
  const tau = 2 * Math.PI

  // zero the frequency data arrays so they can be used
  // as accumulators during the correlation
  const frequencyData = {
    real: new InputType(n).fill(0),
    imaginary: new InputType(n).fill(0),
  }

  // loop for each value in frequency domain
  for (let k = 0; k < n; k++) {
    // correlate with the complex sinusoid
    for (let i = 0; i < n; i++) {
      // calculate complex sinusoid
      const sinusoid = {
        real: Math.cos((tau * k * i) / n),
        imaginary: -Math.sin((tau * k * i) / n),
      }

      frequencyData.real[k] +=
        timeData.real[i] * sinusoid.real -
        timeData.imaginary[i] * sinusoid.imaginary

      frequencyData.imaginary[k] +=
        timeData.real[i] * sinusoid.imaginary +
        timeData.imaginary[i] * sinusoid.real
    }
  }

  return frequencyData
}
