import { beforeEach, describe, expect, it } from 'vitest';
import { Paper } from './paper';
import { Pencil } from './pencil';
import { Writer } from './writer';

let writer: Writer;
let pencil: Pencil;
let paper: Paper;

beforeEach(() => {
  paper = new Paper();
  pencil = new Pencil(13);
  writer = new Writer(pencil, paper);
});

describe('writing to paper', () => {
  it('writes to paper', () => {
    writer.write('hello, world!');
    expect(paper.text).toBe('hello, world!');
  });

  it('always appends to paper', () => {
    writer.write('hello, world');
    expect(paper.text).toBe('hello, world');

    writer.write('!');
    expect(paper.text).toBe('hello, world!');
  });
});

describe('writing causes degradation', () => {
  it('degrades the pencil by 1 when writing an "e"', () => {
    writer.write('e');
    expect(pencil.durability).toBe(12);
  });

  it('degrades the pencil by 2 when writing an "ee"', () => {
    writer.write('ee');
    expect(pencil.durability).toBe(11);
  });

  it('degrades the pencil by 2 when writing a capital letter', () => {
    writer.write('E');
    expect(pencil.durability).toBe(11);
  });

  it('degrades the pencil by 0 when writing a space', () => {
    writer.write(' ');
    expect(pencil.durability).toBe(13);
  });
});

describe('when the pencil has no durability', () => {
  beforeEach(() => {
    paper = new Paper();
    pencil = new Pencil(13);
    writer = new Writer(pencil, paper);
    writer.write('e'.repeat(13));
  });

  it('writes a space instead of the string', () => {
    writer.write('b');
    expect(paper.text).toBe('e'.repeat(13) + ' ');
  });

  it('writes many spaces instead of a longer string', () => {
    writer.write('bb');
    expect(paper.text).toBe('e'.repeat(13) + '  ');
  });

  it('writes a space when durability would run out', () => {
    const exhaustedPaper = new Paper();
    const exhaustedPencil = new Pencil(13);
    const exhaustedWriter = new Writer(exhaustedPencil, exhaustedPaper);

    exhaustedWriter.write('e'.repeat(13) + 'bbb');
    expect(exhaustedPaper.text).toBe('e'.repeat(13) + '   ');
  });
});
