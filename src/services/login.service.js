/* eslint-disable no-unused-vars */
import axios from "axios";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((response) => {
      console.log(response);
      callback(true, response.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

