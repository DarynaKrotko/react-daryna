import {Navigate, Route, Routes} from "react-router-dom";

import {CarForm, Cars, Header, Posts, Users} from "./components";
import {AuthRequiredLayout, MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


const App = () => {
 return (
  // <div>
  //     {/*<Header/>*/}
  //     {/*<Users/>*/}
  //     {/*<Posts/>*/}
  //
  // </div>
     <Routes>
         <Route path={'/'} element={<MainLayout/>}>
             <Route index element={<Navigate to={'/cars'}/>}/>
             <Route element={<AuthRequiredLayout/>}>
                 <Route path={'cars'} element={<CarsPage/>}/>
             </Route>
             <Route path={'login'} element={<LoginPage/>}/>
             <Route path={'register'} element={<RegisterPage/>}/>
         </Route>
     </Routes>
 );
};

export {App};