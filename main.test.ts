import { describe, it, expect } from 'vitest'
import { write, paper, clear, getDurability } from './main'


beforeEach(() => {
  clear();
});


describe('writing to paper', () => {
  it('Writes to paper', () => {
    write('Hello, world!');
    expect(paper).toBe('Hello, world!');
  });

  it('Always appends to paper', () => {
    write('Hello, world');
    expect(paper).toBe('Hello, world');
    write('!');
    expect(paper).toBe('Hello, world!');
  });
});

describe('writing causes degredation', () => {
  it('degrades pencil by 1 when writing an "e"', () => {
    write('e');
    expect(getDurability()).toBe(9);
  });

  it('degrades pencil by 2 when writing an "ee"', () => {
    write('ee');
    expect(getDurability()).toBe(8);
  });
});
