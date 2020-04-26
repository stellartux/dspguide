/**
 * http://www.dspguide.com/ch8/5.htm
 * Chapter 8, Table 8-1
 * THE INVERSE DISCRETE FOURIER TRANSFORM
 * see also https://developer.mozilla.org/en-US/docs/Web/API/PeriodicWave
 * for the WebAudio API built-in implementation
 * real and imaginary must be equal in length
 * @param {number[]} real part of the signal
 * @param {number[]} imaginary part of the signal
 * @param {boolean} [methodOne=false] true for method one, false for method two
 * @returns {number[]} the inputs converted to the time domain
 **/
export function inverseDiscreteFourierTransform(real, imaginary, methodOne) {
  // set the constant 2π
  const tau = 2 * Math.PI
  // calculate the number of samples in the output signal
  const outputLength = real.length + imaginary.length - 2

  // find the cosine and sine wave amplitudes using Eq. 8-3
  const cosAmplitudes = real.map(sample => sample / (outputLength / 2))
  const sinAmplitudes = imaginary.map(sample => -sample / (outputLength / 2))
  // first and last samples have half bandwidth, see Fig. 8-7
  cosAmplitudes[0] /= 2
  cosAmplitudes[cosAmplitudes.length - 1] /= 2

  /*
   * Synthesis method #1 - Loop through each frequency generating the entire
   * length of the sine & cosine waves, and add them to the accumulator signal
   */
  if (methodOne) {
    const output = new Array(outputLength).fill(0)

    cosAmplitudes.forEach((amplitude, frequency) => {
      output.forEach((_, sampleIndex) => {
        output[sampleIndex] +=
          amplitude * Math.cos((tau * frequency * sampleIndex) / outputLength)
      })
    })
    sinAmplitudes.forEach((amplitude, frequency) => {
      output.forEach((_, sampleIndex) => {
        output[sampleIndex] +=
          amplitude * Math.sin((tau * frequency * sampleIndex) / outputLength)
      })
    })

    return output
  }

  /*
   * Synthesis method #2 - Loop through each sample in the time domain,
   * and sum the corresponding samples from each cosine and sine wave
   */
  const output = Array.from({ length: outputLength }, (_, sampleIndex) => {
    // calculate the angle of this sample
    const angle = (tau * sampleIndex) / outputLength

    // loop over each frequency and sum the amplitudes for the current sample
    // the frequency overtone number is equal to the index of the amplitude
    return cosAmplitudes.reduce(
      (outputValue, cosAmplitude, frequency) =>
        outputValue +
        cosAmplitude * Math.cos(frequency * angle) +
        sinAmplitudes[frequency] * Math.sin(frequency * angle),
      0 // initial value for outputValue accumulator
    )
  })

  return output
}
