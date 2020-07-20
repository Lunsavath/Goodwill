import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodwill-60d8a.firebaseio.com/",
});

export default instance;
