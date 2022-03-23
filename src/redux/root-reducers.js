/** @format */

import { combineReducers } from "redux";
import themeReducer from "./theme/theme.reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};

const persistorReducer = persistReducer(persistConfig, rootReducers);

export default persistorReducer;
