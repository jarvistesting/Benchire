import axios from "axios";

const getDetail = async ({ role }) => {
  let url =
    role === "admin"
      ? `/5de279a53000005200e9c8ea`
      : `/5de279d23000006600e9c8eb`;
  const response = await axios.get(`http://www.mocky.io/v2${url}`);
  return response;
};

export const getUserDetail = (userDetail, callback) => {
  return async dispatch => {
    try {
      const response = await getDetail(userDetail);
      if (
        response.data.email === userDetail.email &&
        response.data.password === userDetail.password
      ) {
        dispatch({ type: "LOGGEDIN", payload: { ...response.data } });
        if (callback) {
          callback(userDetail.role);
        }
      } else {
        dispatch({ type: "LOGGEDIN_ERROR", payload: {} });
      }
    } catch (err) {
      console.log("API Response error", err.message);
    }
  };
};
