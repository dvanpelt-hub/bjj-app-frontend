import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import currentUserReducer from "./slices/currentUserSlice";
import selectedCoachReducer from "./slices/selectedCoachSlice";

const rootReducer = combineReducers({
  filter: filterReducer,
  currentUser: currentUserReducer,
  selectedCoach: selectedCoachReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
