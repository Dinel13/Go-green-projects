import { uiActions } from "./uiSlice";

export const showNotif = (status, title, message, action) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: status,
        title: title,
        message: message,
        action: action,
      })
    );
  };
};

export const hideNotif = () => {
    return async (dispatch) => {
        dispatch(uiActions.hideNotification())
    }
}
