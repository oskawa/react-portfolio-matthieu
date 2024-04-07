import axios from "axios";

const http = axios.create({
  baseURL: 'https://portfolio-matthieu-back.maxime-eloir.fr/wp-json/matthieu-delomez/v1/',
})

export default http