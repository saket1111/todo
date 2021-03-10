import {addToDo} from "./addtodo.js";
export const  addEvent=()=>{
    if(event.keyCode == 13){
        const toDo = input.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo);
        }
        input.value = "";
    }
};