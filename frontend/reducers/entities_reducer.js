import { combineReducers } from "redux";
import usersReducer from "./entities/users_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
});

export default entitiesReducer;
