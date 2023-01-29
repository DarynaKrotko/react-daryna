const Album = ({album}) => {
    const {userId, id, title} = album;

 return (
  <div>
      <div>UserId:{userId}</div>
      <div>ID:{id}</div>
      <div>Title:{title}</div>
      <hr/>
  </div>
 );
};

export {Album};