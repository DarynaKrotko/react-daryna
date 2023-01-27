import {urls} from "../configs";
import {axiosService} from "./axiosService";


const userService={
    getAll: () => axiosService.get(urls.users),
    create: (newUser) => axiosService.post(urls.users, newUser)
}

export {userService};