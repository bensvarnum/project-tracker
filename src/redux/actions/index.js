import {
  EDIT_TASK,
  CREATE_TASK,
  REMOVE_TASK,
  LOGIN_USER,
  LOGOUT_USER,
} from "./types";

import uuid from "react-uuid";

export const editTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params,
    },
  };
};

export const createTask = ({ title, description }) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: uuid(),
      title,
      description,
      status: "Unstarted",
    },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};

export const loginUser = ({ name, email, password }) => {
  return {
    type: LOGIN_USER,
    payload: {
      id: uuid(),
      name,
      email,
      password,
    },
  };
};

export const logoutUser = (id) => {
  return {
    type: LOGOUT_USER,
    id,
  };
};
