import { combineReducers } from 'redux';
import MenuItems from './reducer_menuitems'

const rootReducer = combineReducers({
  menuItems: MenuItems
});

export default rootReducer;