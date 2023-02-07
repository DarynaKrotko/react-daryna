import {axiosService} from "./axiosService";

import {urls} from "../configs";

const postsService ={
    getAll: ()=> axiosService.get(urls.posts)
}

export {postsService};