import axios from "axios";

// http://localhost:3000
export const LoginReq = (email, password) => {
  axios
    .post("http://localhost:3000/signin", { 
      email: email,
      password: password,
    })
    .then((response) => {
      alert("success");
      console.log(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const SignUpReq = (email, password, role, handle) => {
  axios
    .post("http://localhost:3000/signup", {
      email: email,
      password: password,
      role: role,
      handle: handle,
    })
    .then((response) => {
      alert("User created!");
      console.log(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};