import {Route, Routes} from "react-router-dom";

import {AboutPage, AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts/MainLayout";
import {PostPage} from "./pages";

const App = () => {

 return (
     <div>
         <Routes>
             <Route path={'/'} element={<MainLayout/>}>
                 <Route index element={<HomePage/>}/>
                 <Route path={'todos'} element={<TodosPage/>}/>
                 <Route path={'albums'} element={<AlbumsPage/>}/>

                 <Route path={'comments'} element={<CommentsPage/>}>
                     <Route path={':postId'} element={<PostPage/>}/>
                 </Route>

                 <Route path={'about'} element={<AboutPage/>}/>
                 <Route path={'*'} element={<NotFoundPage/>}/>
             </Route>
         </Routes>
     </div>

 );
};

export {App};