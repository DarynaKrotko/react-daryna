import axios from "axios";

const axiosCarService = axios.create({baseURL:'http://owu.linkpc.net/carsAPI/v1'})

export {axiosCarService};
