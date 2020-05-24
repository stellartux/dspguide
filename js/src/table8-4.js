/**
 * http://www.dspguide.com/ch8/9.htm
 * Chapter 8, Table 8-4
 * PHASE UNWRAPPING
 * @param {number[]|Float32Array|Float64Array} phase
 * @returns {number[]|Float32Array|Float64Array} unwrapped phase values
 **/
export function phaseUnwrapping(phase) {
  const InputType = Object.getPrototypeOf(phase).constructor

  // holds the unwrapped phase
  const unwrapped = new InputType(phase.length)

  const tau = 2 * Math.PI

  // the first point of all phase signals is zero
  unwrapped[0] = 0

  // go through the unwrapping algorithm
  for (let k = 1; k < phase.length; k++) {
    const c = Math.floor((unwrapped[k - 1] - phase[k]) / tau)
    unwrapped[k] = phase[k] + c * tau
  }

  return unwrapped
}
