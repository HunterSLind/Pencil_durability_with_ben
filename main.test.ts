import { describe, it, expect } from 'vitest'
import { write, paper, clear, getDurability } from './main'


beforeEach(() => {
  clear();
});


describe('writing to paper', () => {
  it('Writes to paper', () => {
    write('hello, world!');
    expect(paper).toBe('hello, world!');
  });

  it('Always appends to paper', () => {
    write('hello, world');
    expect(paper).toBe('hello, world');
    write('!');
    expect(paper).toBe('hello, world!');
  });
});

describe('writing causes degredation', () => {
  it('degrades pencil by 1 when writing an "e"', () => {
    write('e');
    expect(getDurability()).toBe(12);
  });

  it('degrades pencil by 2 when writing an "ee"', () => {
    write('ee');
    expect(getDurability()).toBe(11);
  });

  it('degrades pencil by 2 when writing a capital letter', () => {
    write('E');
    expect(getDurability()).toBe(11);
  });

  it('degrades pencil by 0 when writing a space', () => {
    write(' ');
    expect(getDurability()).toBe(13);
  });
});

describe('Pencil has no durability', () => {
  describe('Pencil set to 0 durability', () => {
    beforeEach(() => {
      write('eeeeeeeeeeeee');
    });

    it('writes a space instead of the string', () => {
      write('b');
      expect(paper).toBe('eeeeeeeeeeeee ');
    });

    it('writes many spaces instead of a longer string', () => {
      write('bb');
      expect(paper).toBe('eeeeeeeeeeeee  ');
    });
  });
  
  it('Writes a space when durability would run out', () => {
    write('eeeeeeeeeeeeebbb');
    expect(paper).toBe('eeeeeeeeeeeee   ');
  });
});
