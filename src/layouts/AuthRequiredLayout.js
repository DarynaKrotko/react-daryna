import {Outlet} from "react-router-dom";

const AuthRequiredLayout = () => {
 return (
  <div>
   AuthRequiredLayout
      <Outlet/>
  </div>
 );
};

export {AuthRequiredLayout};