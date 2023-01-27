import {useForm} from "react-hook-form";

import {commentService} from "../../services";

const CommentForm = ({setComments}) => {
    const {register,handleSubmit,reset} = useForm({mode:'all'})

    const submit= async (comment)=> {
        const {data} = await commentService.create(comment)
        setComments(prev=> [...prev, data])
        reset()
    }

    return (
  <div>
      <form onSubmit={handleSubmit(submit)}>
          <input type="text" placeholder={'id'} {...register('id')}/>
          <input type="text" placeholder={'name'} {...register('name')}/>
          <input type="text" placeholder={'email'} {...register('email')}/>
          <button>Create</button>
      </form>

  </div>
 );
};

export {CommentForm};