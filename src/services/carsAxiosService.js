import axios from "axios";

const carsAxiosService = axios.create({baseURL:'http://owu.linkpc.net/carsAPI/v1'})

export {carsAxiosService}