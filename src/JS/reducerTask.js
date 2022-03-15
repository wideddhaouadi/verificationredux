import { ADDITION } from "./ActionType"

const initialState = {
    tasks:[]
}

const reducerTask=(state=initialState,action)=>{
    switch(action.type){
        case ADDITION : return {...state,tasks:[...state.tasks,action.payload]}
    }

    }
export default reducerTask;