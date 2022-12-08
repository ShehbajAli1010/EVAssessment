import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../constants/userConstant";

export const userAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const { data } = await axios.get("https://randomuser.me/api");
    dispatch({ type: GET_USER_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILED,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
