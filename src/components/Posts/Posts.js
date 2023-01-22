import {useEffect, useState} from "react";

import {userService} from "../../services/userService";
import {Post} from "../Post/Post";
import {Users} from "../Users/Users";


const Posts = () => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect( () => {
        userService.getPosts(5)
            .then(value => value.data)
            .then(value => setUserPosts([...value]))
    },[])

 return (
  <div>
      {userPosts.map(post => <Post key={post.id} post={post}/>)}
  </div>
 );
};

export {Posts};