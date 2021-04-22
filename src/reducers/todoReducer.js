import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "../actions/types"

 const initState = [
     {
         id:1,
         desc:'Wake up , Shower , Leave for Work ',
         isDone:false
     },
     {
         id:2,
         desc:'Dinner With friends',
         isDone:false
     },
     {
        id:3,
        desc:'Relax And Bed Time',
        isDone:false
    }
 ]
 const todoReducer=(state=initState,action)=>{
     switch (action.type) {
         case ADD_TASK:
             return [...state,action.payload]
          case DELETE_TASK:
              return state.filter(el=>el.id!==action.payload)   
             case TOGGLE_TASK:
                 return state.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}:el)
     case EDIT_TASK:
         return state.map(el=>el.id===action.payload.id? action.payload:el)
         default:
             return state
     }
 }

 export default todoReducer