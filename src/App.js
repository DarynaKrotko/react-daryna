import {useEffect, useState} from "react";

import {carService, commentService, userService} from "./services";
import {CarForm, Cars, CommentForm, Comments, UserForm, Users} from "./components";

const App = () => {

    // const [users, setUsers] = useState([]);
    // useEffect(()=>{
    //     userService.getAll().then(({data})=> setUsers([...data]))
    // },[])

    // const [comments, setComments] = useState([]);
    // useEffect(()=>{
    //     commentService.getAll().then(({data}) => setComments([...data]))
    // },[])

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null)
    useEffect(()=>{
        carService.getAll().then(({data})=> setCars([...data]))
    },[])

    return (
        <div>
            {/*Зробити компонент, в якому буде форма, */}
            {/*за допомоги якої можливо створити нового юзера постовим запитом на */}
            {/*http://jsonplaceholder.typicode.com/users*/}

            {/*<UserForm setUsers={setUsers}/>*/}
            {/*<hr/>*/}
            {/*<Users users={users}/>*/}

            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар */}
            {/*постовим запитом на http://jsonplaceholder.typicode.com/comments*/}

            {/*<CommentForm setComments={setComments}/>*/}
            {/*<hr/>*/}
            {/*<Comments comments={comments}/>*/}

            {/*Реалізувати створення, видалення та оновлення машин*/}

            <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
        </div>
    );
};

export {App};