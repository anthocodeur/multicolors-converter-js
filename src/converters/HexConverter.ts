import { Converter } from "@src/converters/Converter";

export class HexConverter extends Converter {
  /**
   *
   * @param hex The hex color to convert to Rgb
   */
  static hexToRgb(hex: string): RgbColor | null {
    let found = null;
    hex = hex.startsWith("#") ? hex : `#${hex}`;
    this.getColors().find((c) => {
      if (c.hex === hex.toUpperCase()) {
        found = c.rgb.split("-").map(Number);
      }
    });
    return found;
  }

  /**
   *
   * @param hex The hex color to convert to Ral
   */
  static hexToRal(hex: string): string | null {
    let found = null;
    hex = hex.startsWith("#") ? hex : `#${hex}`;
    this.getColors().find((c) => {
      if (c.hex === hex.toUpperCase()) {
        found = c.ral;
      }
    });
    return found;
  }

  /**
   *
   * @param hex The hex color to convert to Name
   */
  static hexToName(hex: string): string | null {
    let found = null;
    hex = hex.startsWith("#") ? hex : `#${hex}`;
    this.getColors().find((c) => {
      if (c.hex === hex.toUpperCase()) {
        found = c.name;
      }
    });
    return found;
  }
}
