import { combineReducers } from 'react-redux';
import MenuItems from './reducer_main_menu_items';

const rootReducer = combineReducers({
  menuItems: MenuItems
});

export default rootReducer;