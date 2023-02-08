import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux/slices";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts, errors, loading} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(postActions.getAll())
    },[])

 return (
  <div>
      {errors && JSON.stringify(errors)}
      {loading && <h1>Loading........</h1>}
      {posts.map(post=> <Post key={post.id} post={post}/>)}
  </div>
 );
};

export {Posts};