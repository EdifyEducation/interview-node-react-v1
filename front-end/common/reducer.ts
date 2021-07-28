import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { Reducer as BooksReducer } from './DuckBooks';

const reducers = combineReducers({
  books: BooksReducer,
});

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk,
      // ReduxThunkThe role of this middleware is very simple: verify if an action is a function and in which case execute it. This simple behaviour allows us to create actions no longer as simple objects, but as functions, which therefore have business logic.
      ReduxPromise,
      // ReduxPromise: The default export is a middleware function. If it receives a promise, it will dispatch the resolved value of the promise. It will not dispatch anything if the promise rejects.
    ),
  ),
);
