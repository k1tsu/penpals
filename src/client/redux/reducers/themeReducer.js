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
    primaryColor: "#ECECEC",
    secondaryColor: "#ECECEC",
    modalBackgroundColor: "#FFFFFF",
    primaryTextColor: "#000000",
    secondaryTextColor: "#515151",
    hoverBackgroundColor: "#E5E5E5",
    darkMode: false
  },
  dark: {
    primaryColor: "#000",
    secondaryColor: "#000",
    modalBackgroundColor: "#222222",
    primaryTextColor: "#FFFFFF",
    secondaryTextColor: "#C0C0C0",
    hoverBackgroundColor: "#E5E5E5",
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
