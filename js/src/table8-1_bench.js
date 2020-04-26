import { bench, runIfMain } from 'https://deno.land/std@v0.41.0/testing/bench.ts'
import { inverseDiscreteFourierTransform } from './table8-1.js'

const real = Array.from({ length: 64 }, () => Math.random())
const imag = [0]
  .concat(Array.from({ length: 62 }, () => Math.random()))
  .concat(0)

bench({
  name: 'Method 1',
  runs: 100,
  func: b => {
    b.start()
    inverseDiscreteFourierTransform(real, imag, true)
    b.stop()
  },
})
bench({
  name: 'Method 2',
  runs: 100,
  func: b => {
    b.start()
    inverseDiscreteFourierTransform(real, imag, false)
    b.stop()
  },
})

/*
benchmark Method 1 ...
  100 runs avg: 0.84ms
benchmark Method 2 ...
  100 runs avg: 0.52ms
*/

runIfMain(import.meta, { skip: /throw/ })
