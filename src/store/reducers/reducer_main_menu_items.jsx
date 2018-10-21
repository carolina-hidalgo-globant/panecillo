import _ from 'lodash';
import { FETCH_MAIN_MENU_ITEMS, FETCH_OTHER_MENU_ITEMS } from '../actions';

export default function menuItemsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_MAIN_MENU_ITEMS:
      return _.mapKeys(action.payload.data, 'menu_id');
    case FETCH_OTHER_MENU_ITEMS:
      return _.mapKeys(action.payload.data, 'menu_id');
    default:
      return state;
  }
}
