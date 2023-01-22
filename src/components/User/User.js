const User = ({user, setIndex}) => {
    const {id, name} = user;

    return (
  <div>
   <div>ID: {id} Name: {name}</div>
      <button onClick={()=>
          setIndex({id})
      }>Posts</button>
  </div>
 );
};

export {User};