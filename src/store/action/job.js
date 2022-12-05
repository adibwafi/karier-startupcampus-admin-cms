import { BASE_URL, FETCH_JOB, FETCH_ONE_JOB } from "../actionTypes/actionTypes";

export function fetchJobs() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/jobs`, {
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
        type: FETCH_JOB,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function jobDetailById(id) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/jobs/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw response.message;
      }
      const data = await response.json();
      dispatch({
        type: FETCH_ONE_JOB,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addJob(job) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/jobs/add`, {
        method: "POST",
        body: JSON.stringify(job),
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw response.message;
      }
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteJob(id) {
  return async (dispatch) => {
    console.log(id)
    try {
      let response = await fetch(BASE_URL + `/jobs/${id}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw response.message;
      }
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateJob(job, id) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/jobs/${id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      if (!response.ok) {
        throw response.message;
      }
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateActiveJob(id, is_active) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/jobs/${id}`, {
        method: "PATCH",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_active }),
      });
      if (!response.ok) {
        throw response.message;
      }
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error);
    }
  };
}
