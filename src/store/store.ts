import { createStore } from "redux";
import rootReducer from "./reducers/index";

const defaultState = {
  policies: []
};

const store = createStore(rootReducer, defaultState);

export default store;
