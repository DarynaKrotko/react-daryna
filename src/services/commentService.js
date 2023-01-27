import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentService ={
    getAll: ()=> axiosService.get(urls.comments),
    create: (newComment) => axiosService.post(urls.comments, newComment)
}

export {commentService};