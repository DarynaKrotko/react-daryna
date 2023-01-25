import {useEffect, useState} from "react";

import {userService} from "../../services";
import {Post} from "../Post/Post";



const Posts = ({index}) => {
    const [userPosts, setUserPosts] = useState([]);

    const {id} = index;
    console.log(id);

    useEffect( () => {
        userService.getPosts(id)
            .then(value => value.data)
            .then(value => setUserPosts([...value]))
    },[id])

 return (
  <div>
      {userPosts.map(post => <Post key={post.id} post={post}/>)}
  </div>
 );
};

export {Posts};