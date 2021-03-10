import {completeToDo} from "./completetodo.js";
import {removeToDo} from "./removetodo.js";
export const completeAndRemove=()=>{
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    
    
};