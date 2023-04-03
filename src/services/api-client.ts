import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a13006eebe8b4c0d9c9eda9353ff108b",
  },
});
