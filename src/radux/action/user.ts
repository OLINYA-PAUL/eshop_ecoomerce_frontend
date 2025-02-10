// load user

import { axiosInstance } from "../../axiosbaseUrl/axios";

export const loadUser = () => async (dispatch: any) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const { data } = await axiosInstance.get("/user/get-user");

    console.log({ userData: data });

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error: any) {
    console.log(error.message);
    dispatch({
      type: "LoadUserFail",
      payload: error.response?.data.error,
    });
  }
};
