import Axios from "axios";

export async function loginUser(emailId, password) {
  const res = await Axios.post(
    `${import.meta.env.VITE_SERVER_URL}/auth/login`,
    { emailId, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true
    }
  );
  const data = res.data;
  // console.log({data})
  return data;
}


export async function signUpUser(emailId, password) {
  const res = await Axios.post(
    `${import.meta.env.VITE_SERVER_URL}/auth/signup`,
    { emailId, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials : true
    }
  );
  const data = res.data;
  return data;
}
