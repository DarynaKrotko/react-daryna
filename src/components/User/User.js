const User = ({user}) => {
    const {id, name, username} = user;

 return (
  <div>
      <div>ID:{id}</div>
      <div>name:{name}</div>
      <div>username:{username}</div>
  </div>
 );
};

export {User};