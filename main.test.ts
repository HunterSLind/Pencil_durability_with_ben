import { describe, it, expect } from 'vitest'
import { write, paper, clear } from './main'


beforeEach(() => {
  clear();
});


describe('writing to paper', () => {
  it('Writes to paper', () => {
    write('Hello, world!')
    expect(paper).toBe('Hello, world!')
  });

  it('Always appends to paper', () => {
    write('Hello, world')
    expect(paper).toBe('Hello, world')
    write('!')
    expect(paper).toBe('Hello, world!')
  });
});
