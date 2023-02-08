import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carActions} from "../../redux/slices";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const {loading} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])

 return (
  <div>
      {loading && <h1>Loading......</h1>}
      {cars.map(car=><Car key={car.id} car={car}/>)}
  </div>
 );
};

export {Cars};