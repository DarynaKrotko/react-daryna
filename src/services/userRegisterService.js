import {carsAxiosService} from "./carsAxiosService";
import {urls} from "../configs";


const userRegisterService = {
    create: (user)=> carsAxiosService.post(urls.users, user)
}

export {userRegisterService}