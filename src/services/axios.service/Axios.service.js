import axios from "axios";

import baseURL from "../../configs/urls";

let axiosService = axios.create({baseURL});

export default axiosService

