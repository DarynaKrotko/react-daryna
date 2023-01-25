import {useEffect, useState} from "react";
import axios from "axios";

import {Ship} from "../Ship/Ship";

const Ships = () => {
    const [ships, setShips] = useState([]);

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches/')
            .then(value => value.data.filter(value=> value.launch_year !== '2020'))
            .then(value=> setShips([...value]))
    },[])

 return (
  <div>
      {ships.map(ship => <Ship key={ship.flight_number} ship={ship}/>)}
  </div>
 );
};

export {Ships};