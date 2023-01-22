import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post1} from "../Post1/Post1";

const Posts1 = () => {
    const [posts,setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState([]);

    useEffect(() =>{
        postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    }, [])

    return (
  <div>
      <h1>Post Details:</h1>
      {postDetails && <Post1 post={postDetails}/>}
      <hr/>
      <h1>Posts:</h1>
      {posts.map(post=><Post1 key={post.id} post={post} setPostDetails={setPostDetails}/>)}
  </div>
 );
};

export {Posts1};