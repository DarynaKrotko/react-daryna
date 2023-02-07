import {useReducer, useRef} from "react";

import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";
import css from './Pets.module.css'

const reducer = (state, action) =>{
    switch (action.type){
        case 'ADD_CAT':
            const [last] = state.cats.slice(-1)
            const id = last?last.id+1:0;
            return {...state, cats:[...state.cats, {id,name:action.payload}]}
        case 'DELETE_CAT':
            const index = state.cats.findIndex(cat=> cat.id=== action.payload);
            state.cats.splice(index,1)
            return {...state}

        case 'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1)
            const idDog = lastDog?lastDog.id+1:0;
            return {...state, dogs:[...state.dogs, {id:idDog,name:action.payload}]}
        case 'DELETE_DOG':
            const indexDog = state.dogs.findIndex(dog=> dog.id=== action.payload);
            state.dogs.splice(indexDog,1)
            return {...state}
        default:
            return {...state}
    }
}
const Pets = () => {
    const catInput = useRef();
    const dogInput = useRef();
    const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]}, (data)=>data);
    const createCat = () => {
        dispatch({type:'ADD_CAT', payload: catInput.current.value})
        catInput.current.value = ''
    };

    const createDog = () => {
        dispatch({type:'ADD_DOG', payload: dogInput.current.value})
        dogInput.current.value = ''
    };

    return (
        <div>
            <div className={css.inputs} >
                <div>
                    Add Cat:
                    <input type="text" ref={catInput}/>
                    <button onClick={createCat}>Save</button>
                </div>
                <div>
                    Add Dog:
                    <input type="text" ref={dogInput}/>
                    <button onClick={createDog}>Save</button>
                </div>
            </div>
            <hr/>
            <div className={css.components}>
                Cats:
                <Cats cats={state.cats} dispatch={dispatch}/>
                Dogs:
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>

        </div>
    );
};

export {Pets};