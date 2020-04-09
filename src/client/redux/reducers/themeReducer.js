/* eslint-disable no-case-declarations */
import {
  SWITCH_THEME,
  SET_DARK_THEME,
  SET_LIGHT_THEME,
  COLLAPSE_MENU,
  OPEN_MENU
} from "../actions/themeActions";

const colors = {
  light: {
    menuBackground: "#FFF",
    textPrimary: "#000",
    textSecondary: "#000",
    appBackground: "#ECECEC",
    darkMode: false
  },
  dark: {
    menuBackground: "#212121",
    textPrimary: "#FFF",
    textSecondary: "#FFF",
    appBackground: "#121212",
    darkMode: true
  }
};

const menu = {
  collapsed: true
};

const themeReducer = (state = { ...colors.light, ...menu }, action) => {
  const newTheme = state.darkMode ? "light" : "dark";

  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        ...colors[newTheme]
      };

    case SET_DARK_THEME:
      return {
        ...state,
        ...colors.dark
      };

    case SET_LIGHT_THEME:
      return {
        ...state,
        ...colors.light
      };

    case COLLAPSE_MENU:
      return {
        ...state,
        collapsed: true
      };

    case OPEN_MENU:
      return {
        ...state,
        collapsed: false
      };

    default:
      return state;
  }
};

export default themeReducer;
