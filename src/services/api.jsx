import axios from "axios";

//base da Url: https://api.themoviedb.org/3/
//url api: /movie/now_playing?api_key=4f27e44422974ff29b634b3d571ac631

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
