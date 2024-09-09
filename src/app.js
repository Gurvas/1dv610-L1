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

// Prompt user for name and favorite color
inputHandler.question('Tell me your first name ', (userName) => {
  inputHandler.question('Red, Green, Pink or Blue? ', (favoriteColor) => {
    // Generate and print users name and color in the chosen color
    const color = colorPicker.convertColor(favoriteColor)
    console.log(`${color}Hello ${userName}! I also love ${favoriteColor}! \x1b[0m`)

    // Close the interface
    inputHandler.close()
  })
})
