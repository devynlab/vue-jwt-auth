import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8080/spring-security-jwt/api/v1/";

(function () {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
})();
