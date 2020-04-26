/**
 * http://www.dspguide.com/ch8/9.htm
 * Chapter 8, Table 8-3
 * RECTANGULAR-TO-POLAR & POLAR-TO-RECTANGULAR CONVERSION
 * @param {number[]} real
 * @param {number[]} imaginary
 * @returns {Object} result
 * @returns {number[]} result.magnitude
 * @returns {number[]} result.phase
 **/
export function rectangularToPolar(real, imaginary) {
  // rectangular-to-polar conversion, Eq. 8-6
  const magnitude = Array.from({ length: real.length }, (_, index) =>
    // see https://mdn.io/hypot
    Math.hypot(real[index], imaginary[index])
  )

  const phase = Array.from({ length: real.length }, (_, index) => {
    // calculate the phase from Eq. 8-6
    // using logical OR to prevent divide by 0 (nuisance 2)
    let p = Math.arctan(imaginary[index] / (real[index] || Number.EPSILON))

    // correct the arctan (nuisance 3)
    if (real[index] < 0) {
      if (imaginary[index] < 0) {
        p -= Math.PI
      } else {
        p += Math.PI
      }
    }

    return p
  })

  return { magnitude, phase }
}

/**
 * polar-to-rectangular conversion, Eq. 8-7
 * @param {number[]} magnitude
 * @param {number[]} phase
 * @returns {Object} result
 * @returns {number[]} result.real
 * @returns {number[]} result.imaginary
 **/
export function polarToRectangular(magnitude, phase) {
  const real = magnitude.map((mag, k) => mag * Math.cos(phase[k]))
  const imaginary = magnitude.map((mag, k) => mag * Math.sin(phase[k]))
  return { real, imaginary }
}
