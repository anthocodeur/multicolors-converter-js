import { Converter } from "@src/converters/Converter";

export class RgbConverter extends Converter {
  /**
   *
   * @param rgb The RGB Array color to convert to Ral
   */
  static rgbToRal(rgb: RgbColor): string | null {
    const rgbStr = `${rgb.red}-${rgb.green}-${rgb.blue}`;
    let found = null;
    this.getColors().find((c: any) => {
      if (c.rgb === rgbStr) found = c.ral;
    });
    return found;
  }

  /**
   *
   * @param rgb The RGB color to convert to Name
   */
  static rgbToName(rgb: RgbColor): string | null {
    const rgbStr = `${rgb.red}-${rgb.green}-${rgb.blue}`;
    let found = null;
    this.getColors().find((c: any) => {
      if (c.rgb === rgbStr) found = c.name;
    });
    return found;
  }

  /**
   *
   * @param rgb The RAL color to convert to HexaDecimal
   */
  static rgbToHex(rgb: number[]): string | null {
    const rgbStr = `${rgb[0]}-${rgb[1]}-${rgb[2]}`;
    let found = null;
    this.getColors().find((c: any) => {
      if (c.rgb === rgbStr) found = c.hex;
    });
    if (found === null) {
      found = `#${rgb[0].toString(16).padStart(2, "0")}${rgb[1]
        .toString(16)
        .padStart(2, "0")}${rgb[2].toString(16).padStart(2, "0")}`;
    }
    return found;
  }
}
