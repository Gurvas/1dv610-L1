/**
 * The color picking module.
 *
 * @author Gustav Larsson <gl222pp@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a color picker.
 */
export class ColorPicker {
  /**
   * Converts a color description to an escape code.
   *
   * @param {string} color - The picked color.
   * @returns {string} - The ANSI escape code for the given color.
   */
  convertColor (color) {
    let colorCode

    // Check input and convert
    switch (color.toLowerCase()) {
      case 'red':
        colorCode = '\x1b[35m'
        break;
      case 'green':
        colorCode = '\x1b[32m'
        break
      default:
        colorCode = '\x1b[0m'
    }
    return colorCode
  }

}
