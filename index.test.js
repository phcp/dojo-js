import { validate, parse } from ".";

describe('The "roman number validator" should', () => {
    test('Return "true" when input is "LXXV"', () => {
        const isValid = validate("LXXV");
        expect(isValid).toBeTruthy();
    });
    test('Return "false" when input is "XXXX"', () => {
        const isValid = validate("XXXX");
        expect(isValid).toBeFalsy();
    });
    test('Return "false" when input is "XI"', () => {
        const isValid = validate("XI");
        expect(isValid).toBeTruthy();
    });
});

describe('The "roman number parser" should',  () => {
    test('Return "75" when the input is "LXXV"', () => {
        const value = parse("LXXV");
        expect(value).toBe(75);
    });
    test('Return "11" when the input is "XI"', () => {
        const value = parse("XI");
        expect(value).toBe(11);
    });
    test('Return "3500" when the input is "MMMD"', () => {
        const value = parse("MMMD");
        expect(value).toBe(3500);
    });
});