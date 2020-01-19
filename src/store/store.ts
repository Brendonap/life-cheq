import { createStore } from "redux";
import rootReducer from "./reducers/index";

const defaultState: { policies: Array<object> } = {
  policies: [
    // {
    //   id: "1",
    //   label: "medical",
    //   name: "hello"
    // },
    // {
    //   id: "2",
    //   label: "test1",
    //   name: "hello1"
    // }
  ]
};

const store = createStore(rootReducer, defaultState);

export default store;
