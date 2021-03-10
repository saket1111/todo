import {variables} from "./variables.js";
export const completeToDo=(element)=>{
    element.classList.toggle(variables.CHECK);
    element.classList.toggle(variables.UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(variables.LINE_THROUGH);
    
}