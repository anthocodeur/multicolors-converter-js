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
    if (found === null) {
      const shorthandRegex = /^#([a-fA-F0-9]{3})$/;
      const result = hex.match(shorthandRegex);
      if (result) {
        const r = result[1].substr(0, 1).repeat(2);
        const g = result[1].substr(1, 1).repeat(2);
        const b = result[1].substr(2, 1).repeat(2);
        found = [r, g, b];
      } else {
        const fullRegex = /^#([a-fA-F0-9]{6})$/;
        const fullResult = hex.match(fullRegex);
        if (fullResult) {
          found = [
            fullResult[1].substr(0, 2),
            16,
            fullResult[1].substr(2, 2),
            16,
            fullResult[1].substr(4, 2),
            16,
          ];
        }
      }
    }
    return found === null
      ? null
      : {
          red: parseInt(found[0] as string, 16),
          green: parseInt(found[2] as string, 16),
          blue: parseInt(found[4] as string, 16),
        };
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
