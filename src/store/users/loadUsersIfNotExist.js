import { usersSlice } from "./index";
import { prepareData } from "../utils";
import { selectUsers } from "./selectors";

export const loadUsersIfNotExist = (dispatch, getState) => {
  if (selectUsers(getState())?.length > 0) {
    return;
  }

  dispatch(usersSlice.actions.startLoading());

  fetch("http://localhost:3001/api/users")
    .then((response) => response.json())
    .then((users) => {
      dispatch(usersSlice.actions.successLoading(prepareData(users)));
    })
    .catch(() => {
      dispatch(usersSlice.actions.failLoading());
    });
};
