import {useForm} from "react-hook-form";

import {userService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit,reset} = useForm({mode:'all'});

    const submit= async (user)=> {
        const {data}= await userService.create(user)
        setUsers(prev=>[...prev, data])
        console.log(data);
        reset()
    }

    return (
  <div>
      <form onSubmit={handleSubmit(submit)}>
          <input type="text" placeholder={'id'} {...register('id')}/>
          <input type="text" placeholder={'name'} {...register('name')}/>
          <input type="text" placeholder={'username'} {...register('username')}/>
          <button >Create</button>
      </form>
  </div>
 );
};

export {UserForm};