import { configureStore, combineReducers } from "@reduxjs/toolkit";

import Reducers from "../slices/setDataSlice";

import CartReducer from "../slices/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["setit", "mycart"],
};

const rootReducer = combineReducers({
  setit: Reducers,
  mycart: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
