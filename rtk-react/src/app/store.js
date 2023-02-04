import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiFetcher';

//configureStore takes an object with a reducer property and returns a Redux store
//The reducer property is an object with a key of 'api' and a value of apiReducer
//The key of 'api' is the name of the slice of state that will be managed by the reducer
//The value of apiReducer is the reducer function that will be used to manage the state
export default configureStore({
  reducer: {
    api: apiReducer,
  },
});
