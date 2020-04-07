export const SWITCH_THEME = "SWITCH_THEME";
export const SET_LIGHT_THEME = "SET_LIGHT_THEME";
export const SET_DARK_THEME = "SET_DARK_THEME";
export const COLLAPSE_MENU = "COLLAPSE_MENU";
export const OPEN_MENU = "OPEN_MENU";

export const switchTheme = (theme = undefined) => ({
  type: SWITCH_THEME,
  payload: theme
});

export const setLightTheme = () => ({
  type: SET_LIGHT_THEME
});

export const setDarkTheme = () => ({
  type: SET_DARK_THEME
});

export const collapseMenu = () => ({
  type: COLLAPSE_MENU
});

export const openMenu = () => ({
  type: OPEN_MENU
});
