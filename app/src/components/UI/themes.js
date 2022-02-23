import { lightMode, darkMode } from './variables';

const lightModeTheme = {
    boxShadowColor: lightMode.boxShadowColor,
    backgroundColor: lightMode.backgroundColor,
    text: lightMode.textColor,
    input: lightMode.input,
    elements: lightMode.elements
}

const darkModeTheme = {
    boxShadowColor: darkMode.boxShadowColor,
    backgroundColor: darkMode.backgroundColor,
    text: darkMode.textColor,
    input: darkMode.input,
    elements: darkMode.elements
}

export {
    lightModeTheme,
    darkModeTheme
}