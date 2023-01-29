import {useEffect, useState} from "react";

import {postService} from "../../services";

const Post = ({postId}) => {

    const [post, setPost] = useState(null);

    useEffect(()=>{
            postService.getById(postId).then(({data})=>setPost(data))
        },[postId]);

 return (
  <div>
      {post &&
      <>
          <div>ID:{post.id}</div>
          <div>UserID:{post.userId}</div>
          <div>Title:{post.title}</div>
          <div>Body:{post.body}</div>
      </>
      }
  </div>
 );
};

export {Post};