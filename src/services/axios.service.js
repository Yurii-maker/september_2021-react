import axios from "axios";

import {baseURLWithToken} from "../constants";

const axiosService = axios.create(baseURLWithToken);

export {axiosService}

