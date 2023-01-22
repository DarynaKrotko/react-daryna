import {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../services/userService";
import {Posts} from "../Posts/Posts";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [index, setIndex] = useState(null);

    console.log(index);

    useEffect( () =>{
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    },[])

    return (
  <div>
      {users.map(user => <User key={user.id} user={user} setIndex={setIndex}/>)}
  </div>
 );
};

export {Users};
