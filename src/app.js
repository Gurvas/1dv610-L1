/**
 * The starting point of the application.
 * 
 * @author Gustav Larsson <gl222pp@student.lnu.se>
 * @version 1.0.0
 */

import readline from 'readline'
import { ColorPicker } from './color-picker.js'

const colorPicker = new ColorPicker

const inputHandler = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log(colorPicker.convertColor('red'))

console.log('\x1b[35m%s\x1b[0m','Hello babe')