import { showNotification } from "./uiSlice";

export const showNotif = (status, title, message, action) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: status,
        title: title,
        message: message,
        action: action,
      })
    );
  };
};

