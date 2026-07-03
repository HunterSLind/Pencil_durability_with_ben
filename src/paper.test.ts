import { beforeEach, describe, expect, it } from 'vitest';
import { Paper } from './paper';

let paper: Paper;

beforeEach(() => {
    paper = new Paper();
});

describe('Paper content behavior', () => {
    it('starts with empty text', () => {
        expect(paper.text).toBe('');
    });

    it('appends text to the existing content', () => {
        paper.append('hello');
        paper.append(', world!');

        expect(paper.text).toBe('hello, world!');
    });
});
