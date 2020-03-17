/* eslint-disable no-case-declarations */
import { SWITCH_THEME } from './themeActions';

const lightMode = {
  primaryColor: '#FFBA60',
  secondaryColor: '#F6F8FA',
  modalBackgroundColor: '#FFFFFF',
  primaryTextColor: '#000000',
  secondaryTextColor: '#515151',
  hoverBackgroundColor: '#E5E5E5'
};

const darkMode = {
  primaryColor: '#1C1C1C',
  secondaryColor: '#222222',
  modalBackgroundColor: '#222222',
  primaryTextColor: '#FFFFFF',
  secondaryTextColor: '#C0C0C0',
  hoverBackgroundColor: '#E5E5E5'
};

const themeReducer = (state = { isDarkMode: true, ...darkMode }, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      const newColors = state.isDarkMode ? lightMode : darkMode;

      return {
        ...state,
        isDarkMode: !(state.isDarkMode),
        ...newColors
      };

    default:
      return state;
  }
};

export default themeReducer;
