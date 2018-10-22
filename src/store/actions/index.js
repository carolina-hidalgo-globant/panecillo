export const FETCH_MAIN_MENU_ITEMS = 'fetch_main_menu_items';
export const FETCH_OTHER_MENU_ITEMS = 'fetch_other_menu_items';


export function fetchMainMenuItems(response) {
  return {
    type: FETCH_MAIN_MENU_ITEMS,
    payload: response,
  };
}

export function fetchOtherMenuItems(response) {
  return {
    type: FETCH_OTHER_MENU_ITEMS,
    payload: response,
  };
}
