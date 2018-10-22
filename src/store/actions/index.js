import axios from 'axios';

export const FETCH_MAIN_MENU_ITEMS = 'fetch_main_menu_items';
export const FETCH_OTHER_MENU_ITEMS = 'fetch_other_menu_items';

const ROOT_URL = 'https://nr3zj.mocklab.io/recommended';

export function fetchMainMenuItems(response) {
  return {
    type: FETCH_MAIN_MENU_ITEMS,
    payload: response,
  };
}

export function fetchOtherMenuItems() {
  const request = axios.get(`${ROOT_URL}/others`);
  return {
    type: FETCH_OTHER_MENU_ITEMS,
    payload: request,
  };
}
