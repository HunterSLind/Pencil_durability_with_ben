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

    it("sharpens the pencil :)", () => {
        pencil.degradeByCharacter("e")
        expect(pencil.durability).toBe(12);
        pencil.sharpen();
        expect(pencil.durability).toBe(pencil.defaultDurability);
    })

    it("checks that instantiating pencil with a new defaultDurability changes both", () => {
        let pencil2 = new Pencil(20)
        expect(pencil2.defaultDurability).toBe(20)
        expect(pencil2.durability).toBe(pencil2.defaultDurability)
    })

    it("when sharpening with zero length does not increase durability", () => {
        pencil.sharpen()
        pencil.degradeByCharacter("e")
        pencil.sharpen()
        expect(pencil.length).toBe(0)
        expect(pencil.durability).toBe(pencil.defaultDurability - 1);
    })

    it("when given no arguments pencils properties are the default values", () => {
        let pencil4 = new Pencil()
        expect(pencil4.defaultDurability).toBe(40000)
        expect(pencil4.durability).toBe(pencil4.defaultDurability)
        expect(pencil4.length).toBe(1)
    })

});

describe('Pencil Eraser Behavior', () => {
    it('erases texts and repalces with spaces when given a piece of text', () => {
        expect(pencil.erase('Woodchuck','chuck')).toBe('Wood     ');
    });

    it('erases the last given instance of text when given mutiple words that are able to be erased', () => {
        expect(pencil.erase('chuckchuck', 'chuck')).toBe('chuck     ')
    })
});
