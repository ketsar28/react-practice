import axios from "axios"
import { jwtDecode } from "jwt-decode";


export const getProduct = (callback) => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => {
        callback(res.data)
    })
    .catch(err => {
        console.log(err);
    })
}

export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.user;
}