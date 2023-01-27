import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setCars, updateCar}) => {
    const{register, handleSubmit, reset, formState:{isValid},setValue}= useForm({mode:'all', resolver: joiResolver(carValidator)})

    useEffect(()=>{
        if(updateCar){
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    },[updateCar])

    const submit= async (car)=> {
        const {data} = await carService.create(car);
        setCars(prev=> [...prev, data])
        reset()
    }

    const update = async (car) =>{
        const {data} = await carService.updateById(updateCar.id, car)
        if(data){
            const {data} = await carService.getAll()
            setCars(data)
        }
    }

    return (
  <div>
      <form onSubmit={handleSubmit(updateCar ? update:submit )}>
          <input type="text" placeholder={'brand'} {...register('brand')}/>
          <input type="text" placeholder={'price'} {...register('price')}/>
          <input type="text" placeholder={'year'} {...register('year')}/>

          <button disabled={!isValid}>{updateCar ? 'Update': 'Create'}</button>
      </form>
  </div>
 );
};

export {CarForm};