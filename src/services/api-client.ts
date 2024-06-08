import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07a3b14a44e547f6a3ad149204511e82",
  },
});
