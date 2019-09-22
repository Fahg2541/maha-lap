// import { exportAllDeclaration } from "@babel/types";
const MahaLap = require("./maha-lap");
describe("Test Maha-Lap", () => {
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("อาทิตย์");
        expect(result).toEqual(1);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("จันทร์");
        expect(result).toEqual(2);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("อังคาร");
        expect(result).toEqual(3);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("พุธ");
        expect(result).toEqual(4);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("พฤหัสบดี");
        expect(result).toEqual(5);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("ศุกร์");
        expect(result).toEqual(6);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("เสาร์");
        expect(result).toEqual(7);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("สงกรานต์");
        expect(result).toEqual(13);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("คริสมาสต์");
        expect(result).toEqual(25);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
        expect(result).toEqual(31);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithstory("งู");
        expect(result).toEqual(3);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithstory("งูกับแมว");
        expect(result).toEqual(36);
    });
    test("Test Tamnai with time day ramdom = 0.98 return 0.98", () => {
        global.Math.random = jest.fn(() => 0.98);
        const result = MahaLap.tamnaiWithTime("กลางวัน");
        expect(result).toEqual(0.98);
    });
    test("Test Tamnai with time Night ramdom = 0.5 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.4);
        const result = MahaLap.tamnaiWithTime("กลางวัน");
        expect(result).toEqual(0.5);
    });
    test("Test Tamnai with time Night ramdom = 0.4 return 0.4", () => {
        global.Math.random = jest.fn(() => 0.4);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.4);
    });
    test("Test Tamnai with time Night ramdom = 0.64 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.64);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.5);
    });
    test("Test Tamnai with time Night ramdom = 0.5 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.5);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.5);
    });
    test("Test Tamnai with time Night ramdom = 0.1 return 0.1", () => {
        global.Math.random = jest.fn(() => 0.1);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.1);
    });
});