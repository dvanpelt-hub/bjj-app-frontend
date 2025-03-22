import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import selectedCoachReducer from "./slices/selectedCoachSlice";
import coachesReducer from "./slices/coachesSlice";
import authReducer from "./slices/authSlice";
import registerReducer from "./slices/registerSlice";

const rootReducer = combineReducers({
  filter: filterReducer,
  selectedCoach: selectedCoachReducer,
  coaches: coachesReducer,
  auth: authReducer,
  register: registerReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
