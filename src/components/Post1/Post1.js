const Post1 = ({post, setPostDetails}) => {

    const {userId,id,title,body} = post;

 return (
  <div>
      <div>userId:{userId}</div>
      <div>id:{id}</div>
      <div>title:{title}</div>
      <div>body:{body}</div>
      <button onClick={() => setPostDetails(post)}>Details</button>
  </div>
 );
};

export {Post1};