import { lightMode, darkMode } from './variables';

const lightModeTheme = {
    boxShadowHover: lightMode.boxShadowHover,
    headerBackground: lightMode.headerBackground,
    boxShadowColor: lightMode.boxShadowColor,
    backgroundColor: lightMode.backgroundColor,
    text: lightMode.textColor,
    elements: lightMode.elements,
    buttonBackgroundColor: lightMode.buttonBackgroundColor,
    boxShadowButtonColor: lightMode.boxShadowButtonColor,
    cardBackgroundColor: lightMode.cardBackgroundColor,
    cardContentBackgroundColor: lightMode.cardContentBackgroundColor,
    inputBackgroundColor: lightMode.inputBackgroundColor,
    inputBoxShadowColor: lightMode.inputBoxShadowColor,
    errorMessageColor: lightMode.errorMessageColor,
    linkText: lightMode.linkText
}

const darkModeTheme = {
    boxShadowHover: darkMode.boxShadowHover,
    headerBackground: darkMode.headerBackground,
    boxShadowColor: darkMode.boxShadowColor,
    backgroundColor: darkMode.backgroundColor,
    text: darkMode.textColor,
    elements: darkMode.elements,
    buttonBackgroundColor: darkMode.buttonBackgroundColor,
    boxShadowButtonColor: darkMode.boxShadowButtonColor,
    cardBackgroundColor: darkMode.cardBackgroundColor,
    cardContentBackgroundColor: darkMode.cardContentBackgroundColor,
    inputBackgroundColor: darkMode.inputBackgroundColor,
    inputBoxShadowColor: darkMode.inputBoxShadowColor,
    errorMessageColor: darkMode.errorMessageColor,
    linkText: darkMode.linkText
}

export {
    lightModeTheme,
    darkModeTheme
}