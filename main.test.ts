import { expect, test } from 'vitest'
import { helloWorld } from './main'


test('greets the user correctly', () => {
  expect(helloWorld()).toBe(false)
})