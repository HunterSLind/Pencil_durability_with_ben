import { expect, test } from 'vitest'
import { write, paper } from './main'


test('Writes to paper', () => {
  write('Hello, world!')
  expect(paper).toBe('Hello, world!')
})