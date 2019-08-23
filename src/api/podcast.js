import axios from "axios";

export default axios.create({
  baseURL: "https://itunes.apple.com/search?media=podcast&term="
});
