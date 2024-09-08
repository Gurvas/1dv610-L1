/**
 * The starting point of the application.
 * 
 * @author Gustav Larsson <gl222pp@student.lnu.se>
 * @version 1.0.0
 */

import { ColorPicker } from "./Color-picker.js"

const colorPicker = new ColorPicker

console.log(colorPicker.convertColor('red'))

console.log('\x1b[35m%s\x1b[0m','Hello babe')