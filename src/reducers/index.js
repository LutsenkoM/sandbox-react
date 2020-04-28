import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { users } from './users.reducer';
import { news } from './news.reducer'

const persistConfig = {
  key: 'root',
  storage
  // whitelist: [users]
}

const rootReducer = combineReducers({
  users,
  news
});

export default persistReducer(persistConfig, rootReducer);
