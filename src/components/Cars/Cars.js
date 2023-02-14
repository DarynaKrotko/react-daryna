import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carActions} from "../../redux/slices";
import {useSearchParams} from "react-router-dom";

const Cars = () => {
    const {cars, prev, next} = useSelector(state => state.cars);
    const {loading} = useSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page:'1'});
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll({page: query.get('page')}))
    },[dispatch, query])

 return (
  <div>
      <div>
          <button disabled={!prev} onClick={()=> setQuery(query=> ({page: +query.get('page')-1}))}>Prev</button>
          <button disabled={!next} onClick={()=> setQuery(query=> ({page: +query.get('page')+1}))}>Next</button>
      </div>
      {loading && <h1>Loading......</h1>}
      {cars.map(car=><Car key={car.id} car={car}/>)}
  </div>
 );
};

export {Cars};