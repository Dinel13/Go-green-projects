import { login as loginSlice } from "./authSlice";
import { showNotification } from "./uiSlice";

export const signup = (email, name, password) => {
  return async (dispatch) => {
    const signupToBackend = async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/signup`, {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Tidak bisa mendaftar");
      }
      return data;
    };
    try {
      const res = await signupToBackend();
      dispatch(loginSlice(res));
    } catch (error) {
      dispatch(
        showNotification({
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
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Tidak bisa masuk");
      }
      return data;
    };

    try {
      const result = await loginToBackend();
      dispatch(loginSlice (result));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Gagal masuk",
          message: error.message,
        })
      );
    }
  };
};

