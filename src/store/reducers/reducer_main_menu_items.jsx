import { FETCH_MAIN_MENU_ITEMS, FETCH_OTHER_MENU_ITEMS } from '../actions';

const defState = {
  mainMenuItems: {},
  otherMenuItems: {},
};

export default function menuItemsReducer(state = defState, action) {
  switch (action.type) {
    case FETCH_MAIN_MENU_ITEMS: {
      return { ...state, mainMenuItems: action.payload };
    }
    case FETCH_OTHER_MENU_ITEMS:
      return { ...state, otherMenuItems: action.payload };
    default:
      return state;
  }
}
