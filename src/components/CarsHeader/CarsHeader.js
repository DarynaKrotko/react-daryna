import {Link} from "react-router-dom";

import css from './CarsHeader.module.css'

const CarsHeader = () => {
 return (
  <div className={css.CarsHeader}>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
  </div>
 );
};

export {CarsHeader};