import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import currentUserReducer from "./slices/currentUserSlice";
import selectedCoachReducer from "./slices/selectedCoachSlice";
import coachesReducer from "./slices/coachesSlice"

const rootReducer = combineReducers({
  filter: filterReducer,
  currentUser: currentUserReducer,
  selectedCoach: selectedCoachReducer,
  coaches: coachesReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
