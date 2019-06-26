import { calculateTireHeight, calculateSideWallHeight, calculateFrontFenderClearance } from "../utils/calculations";

const width = 215;
const ratio = .45;
const diameter = 17;
const wheelWidth = 7.5;
const offset = 45;


test("calculates the correct tires Height", () => {
    expect(Number(calculateTireHeight(width, ratio, diameter))).toBe(24.62)
})

test("It's calculates sidewall correct", ()=> {
    expect(Number(calculateSideWallHeight(width, ratio))).toBe(3.81)
})

test("Calculates Front Fender Clearance", () => {
    expect(Number(calculateFrontFenderClearance(wheelWidth,offset))).toBe(50.25)
})