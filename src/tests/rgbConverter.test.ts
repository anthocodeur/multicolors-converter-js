import { RgbConverter } from "@src/converters/RgbConverter";

describe("RgbConverter.rgbToRal", () => {
  it("convert [198, 166, 100] in RAL1002", () => {
    expect(RgbConverter.rgbToRal({ red: 198, green: 166, blue: 100 })).toEqual(
      "RAL1002"
    );
  });
  it("convert [194, 176, 120] in RAL1001", () => {
    expect(RgbConverter.rgbToRal({ red: 194, green: 176, blue: 120 })).toEqual(
      "RAL1001"
    );
  });
});
