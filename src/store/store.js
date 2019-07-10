import rootReducer from "./combineReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";

const enhancer = compose(applyMiddleware(thunk));

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  timeout: null
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer, enhancer);

store.subscribe(() => console.log(store.getState()));

export const persistor = persistStore(store);
