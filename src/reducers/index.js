import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { user } from './users.reducer';
import { readUser } from './users.reducer';
import { news } from './news.reducer';

const persistConfig = {
  key: 'root',
  storage
  // whitelist: [users]
}

const rootReducer = combineReducers({
  user,
  news,
  readUser
});

export default persistReducer(persistConfig, rootReducer);
