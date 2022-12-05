import { BASE_URL, FETCH_APPLICATION } from "../actionTypes/actionTypes";

export function fetchApplications() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/applications`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw response.message;
      }

      const data = await response.json();
      // console.log(data, "DARI ACTION!")

      dispatch({
        type: FETCH_APPLICATION,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}