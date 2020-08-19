import dashboardReducer from "../components/dashboardContainer/dashboardSlice";
import searchReducer from "../components/searchContainer/searchSlice";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createStore } from "redux";

const reducers = combineReducers({
  dashboard: dashboardReducer,
  search: searchReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
