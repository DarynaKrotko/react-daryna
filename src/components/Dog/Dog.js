const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;
 return (
  <div>
   <div>{id}.{name}</div>
      <button onClick={()=>dispatch({type:'DELETE_DOG', payload:id})}>Delete</button>
  </div>
 );
};

export {Dog};