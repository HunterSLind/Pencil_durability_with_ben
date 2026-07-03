import { beforeEach, describe, expect, it } from 'vitest';
import { Pencil } from './pencil';

let pencil: Pencil;

beforeEach(() => {
    pencil = new Pencil(13);
});

describe('Pencil durability behavior', () => {
    it('degrades the pencil by 1 when writing an "e"', () => {
        pencil.degradeByCharacter('e');

        expect(pencil.durability).toBe(12);
    });

    it('degrades the pencil by 2 when writing an "ee"', () => {
        pencil.degradeByCharacter('e');
        pencil.degradeByCharacter('e');

        expect(pencil.durability).toBe(11);
    });

    it('degrades the pencil by 2 when writing a capital letter', () => {
        pencil.degradeByCharacter('E');

        expect(pencil.durability).toBe(11);
    });

    it('degrades the pencil by 0 when writing a space', () => {
        pencil.degradeByCharacter(' ');

        expect(pencil.durability).toBe(13);
    });
});
