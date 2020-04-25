export function firstDifference(samples) {
  return samples.map((sample, index) => {
    if (index === 0) {
      return 0
    } else {
      return sample - samples[index - 1]
    }
  })
}

export function runningSum(samples) {
  return samples.map((sample, index) => sample + (samples[index - 1] || 0))
}
