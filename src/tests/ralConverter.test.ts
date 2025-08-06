import { RalConverter } from "@src/converters/RalConverter";

describe("RalConverter.ralToRgb", () => {
  it("convert RAL1002 in [198, 166, 100]", () => {
    expect(RalConverter.ralToRgb("RAL1002")).toEqual([198, 166, 100]);
  });
  it("convert RAL1001 in [194, 176, 120]", () => {
    expect(RalConverter.ralToRgb("RAL1001")).toEqual([194, 176, 120]);
  });
});
