import { authActions } from "./authSlice";
import { uiActions } from "./uiSlice";

export const signup = (email, name, password) => {
  return async (dispatch) => {
    const signupToBackend = async () => {
      const res = await fetch(
        "https://our-philosophy-314515.et.r.appspot.com/api/user/signup",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            name,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.json();
      if (!res.ok) {
        throw new Error(data.message || "Tidak bisa mendaftar");
      }
      return data;
    };
    try {
      const res = await signupToBackend()
      dispatch(authActions.login(res))
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
      return data;
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

export const logout = () => {
  return async (dispatch) => {
    dispatch(authActions.logout)
  }
}
