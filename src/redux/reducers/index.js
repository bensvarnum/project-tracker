import { combineReducers } from "redux";
import tasks from "./tasks";
import user from "./user";
import project from "./project";

export default combineReducers({ tasks, user, project });
