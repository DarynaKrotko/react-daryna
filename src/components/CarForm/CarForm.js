import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import {carActions} from "../../redux/slices";

const CarForm = () => {
    const {register, handleSubmit, reset, formState:{isValid}, setValue} = useForm({mode:'all', resolver:joiResolver(carValidator)});
    const dispatch = useDispatch();
    const {updateCar} = useSelector(state => state.cars);

    useEffect(()=>{
        if(updateCar){
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    },[updateCar])
    const create = async(car) => {
        dispatch(carActions.create({car}))
        reset()
    };
    const update = async (car) => {
        await dispatch(carActions.updateById({id:updateCar.id, car}))
        reset()
    };

    return (
  <div>
      <form onClick={handleSubmit(updateCar ? update : create)}>
          <input type="text" placeholder={'brand'} {...register('brand')}/>
          <input type="text" placeholder={'price'} {...register('price')}/>
          <input type="text" placeholder={'year'} {...register('year')}/>
          <button disabled={!isValid}>{updateCar ? 'update':'create'}</button>
      </form>
  </div>
 );
};

export {CarForm};