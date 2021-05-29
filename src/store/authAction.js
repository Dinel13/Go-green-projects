import { authActions } from "./authSlice";
import { uiActions } from "./uiSlice";

export const login = (email, password) => {
  return async (dispatch) => {
    const loginToBackend = async () => {
      const res = await fetch(
        "https://our-philosophy-314515.et.r.appspot.com/api/user/login",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Tidak bisa masuk");
      }
      return res;
    };

    try {
      const result = await loginToBackend();
      dispatch(authActions.login(result));
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Gagal masuk",
          message: error.message,
        })
      );
    }
  };
};
