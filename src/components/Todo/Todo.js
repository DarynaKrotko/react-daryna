const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;

 return (
  <div>
      <div>UserID:{userId}</div>
      <div>ID:{id}</div>
      <div> Title{title}</div>
      <div>Completed:{completed.toString()}</div>
      <hr/>
  </div>
 );
};

export {Todo};