import {Comments} from "../../components";
import {PostPage} from "../PostPage/PostPage";
import css from './Comments.module.css'

const CommentsPage = () => {

 return (
  <div className={css.CommentsPage}>
   <Comments/>
      <PostPage/>
  </div>
 );
};

export {CommentsPage};