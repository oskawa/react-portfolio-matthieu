import axios from "axios";

const http = axios.create({
  baseURL: 'http://portfolio-matthieu-back.maxime-eloir.fr/wp-json/wp/v2/',
})

export default http