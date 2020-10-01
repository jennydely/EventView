import { turquoise } from '../themes/turquoise'
import { black } from '../themes/black'
import { grey } from '../themes/grey'

const availableThemes = {
  turquoise,
  black,
  grey,
}

export function getThemeColors() {
  if (localStorage.settings) {
    const { theme: chosenTheme } = JSON.parse(localStorage.settings)

    return availableThemes[chosenTheme]
  } else {
    return black
  }
}
