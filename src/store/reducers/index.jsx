import { combineReducers } from 'redux';

import menuItemsReducer from './reducer_main_menu_items';

const rootReducer = combineReducers({ menuItemsReducer });

export default rootReducer;
