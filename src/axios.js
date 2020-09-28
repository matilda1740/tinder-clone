import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone1321.herokuapp.com",
});

export default instance;
