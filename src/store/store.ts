import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { menuReducer as menu } from "./reducers/menuReducer";

const reducers = combineReducers({
  menu,
});

export type IAppState = ReturnType<typeof reducers>;

const middlewares = [thunk, logger];
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const enhancers = isDev
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const configureStore = createStore<IAppState, any, any, any>(
  reducers,
  enhancers
);

const getStore = (): Store<IAppState> => {
  if (!configureStore) {
    throw new Error(
      "Redux store is not defined, use function withAppStore or withMockStore"
    );
  }
  return configureStore;
};

const store = getStore();

export default store;
