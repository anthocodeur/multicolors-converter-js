import { HexConverter } from "@src/converters/HexConverter";

describe("HexConverter.hexToRgb", () => {
  it("convert #C6A664 in [198, 166, 100]", () => {
    expect(HexConverter.hexToRgb("C6A664")).toEqual([198, 166, 100]);
  });

  it("convert #C2B078 in [194, 176, 120]", () => {
    expect(HexConverter.hexToRgb("C2B078")).toEqual([194, 176, 120]);
  });
});

describe("HexConverter.hexToRal", () => {
  it("convert #FF1493 in null without #", () => {
    expect(HexConverter.hexToRal("FF1493")).toEqual(null);
  });
  it("convert #C2B078 in RAL1001", () => {
    expect(HexConverter.hexToRal("C2B078")).toEqual("RAL1001");
  });
});

describe("HexConverter.hexToName", () => {
  it("convert #C6A664 in Jaune sable", () => {
    expect(HexConverter.hexToName("#C6A664")).toEqual("Sand Yellow");
  });
  it("convert #C2B078 in Beige", () => {
    expect(HexConverter.hexToName("#C2B078")).toEqual("Beige");
  });
});
