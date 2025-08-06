import { Color } from "@src/types/Color";
import colors from "../data/colors.json";

export abstract class Converter {
  static colors: Color[] = colors;

  /**
   *
   * Get all colors from outside of the Converter Class
   */
  protected static getColors(): Color[] {
    return this.colors;
  }
}
