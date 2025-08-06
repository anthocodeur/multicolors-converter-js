import { Converter } from "@src/converters/Converter";

export class RalConverter extends Converter {
  /**
   *
   * @param ral The RAL color to convert to Rgb
   */
  static ralToRgb(ral: string): RgbColor | null {
    let found = null;
    this.getColors().find((c: any) => {
      if (c.ral === ral.toUpperCase()) found = c.rgb.split("-").map(Number);
    });
    return found;
  }

  /**
   *
   * @param ral The RAL color to convert to Name
   */
  static ralToName(ral: string): string | null {
    let found = null;
    this.getColors().find((c: any) => {
      if (c.ral === ral.toUpperCase()) found = c.name;
    });
    return found;
  }

  /**
   *
   * @param ral The RAL color to convert to HexaDecimal
   */
  static ralToHex(ral: string): string | null {
    let found = null;
    this.getColors().find((c: any) => {
      if (c.ral === ral.toUpperCase()) found = c.hex;
    });
    return found;
  }
}
