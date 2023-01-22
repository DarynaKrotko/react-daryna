const Ship = ({ship}) => {
    const {flight_number, mission_name, launch_year, links:{mission_patch_small}} = ship;
 return (
  <div>
      <div>flight_number:{flight_number}</div>
      <div>mission_name:{mission_name}</div>
      <div>launch_year:{launch_year}</div>
      <img src={mission_patch_small} alt={mission_name}/>
  </div>
 );
};

export {Ship};