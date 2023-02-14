import {Outlet} from "react-router-dom";

import {CarsHeader} from "../components";

const MainLayout = () => {
 return (
  <div>
      <CarsHeader/>
      <Outlet/>
  </div>
 );
};

export {MainLayout};