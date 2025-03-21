import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import selectedCoachReducer from "./slices/selectedCoachSlice";
import coachesReducer from "./slices/coachesSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  filter: filterReducer,
  selectedCoach: selectedCoachReducer,
  coaches: coachesReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
