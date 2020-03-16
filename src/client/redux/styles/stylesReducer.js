/* eslint-disable no-case-declarations */
import { SWITCH_COLOR_MODE } from './stylesActions';

const lightMode = {
  primaryColor: '#FFBA60',
  secondaryColor: '#F6F8FA',
  modalBackgroundColor: '#FFFFFF',
  primaryTextColor: '#000000',
  secondaryTextColor: '#515151',
  hoverBackgroundColor: '#C4C4C4'
};

const darkMode = {
  primaryColor: '#1C1C1C',
  secondaryColor: '#222222',
  modalBackgroundColor: '#222222',
  primaryTextColor: '#FFFFFF',
  secondaryTextColor: '#C0C0C0',
  hoverBackgroundColor: '#606060'
};

const stylesReducer = (state = { isDarkMode: true, ...darkMode }, action) => {
  switch (action.type) {
    case SWITCH_COLOR_MODE:
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

export default stylesReducer;
