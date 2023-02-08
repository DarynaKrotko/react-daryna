import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices";

const Post = ({post}) => {
    const {userId,id,title,body} = post;
    const dispatch = useDispatch();

 return (
  <div>
      <div>userId:{userId}</div>
      <div>id:{id}</div>
      <div>title:{title}</div>
      <div>body:{body}</div>
      <button onClick={()=>{dispatch(postActions.setSelectedPost(post))}}>Select</button>
      <button onClick={()=> dispatch(postActions.getById({id}))}>apiSelect</button>
  </div>
 );
};

export {Post};