import { combineReducers, createStore, applyMiddleware, compose, Store } from "redux";
import { createPromise } from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension'
import test, { TestProps } from "./reducers/test";
// import { spinnerReduxPlugin } from "@components/general/SmartSpinner";

export interface StoreProps {
  test: TestProps
}

function configureStore(initialState = {}) {
  const reducers = combineReducers({
    test: test
  });
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        createPromise({ promiseTypeDelimiter: "/" }),
        // spinnerReduxPlugin
      )
    )
  );
  //, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
}

export default configureStore;