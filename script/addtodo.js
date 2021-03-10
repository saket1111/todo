import {variables} from "./variables.js";
export const addToDo= (toDo)=>
{
    const DONE = variables.UNCHECK;
    const LINE = "";
    const item = `<li class="item">
  <i class="fa ${DONE} co" job="complete"></i>
  <p class="text ${LINE}">${toDo}</p>
  <i class="fa fa-trash-o de" job="delete"></i>
  </li>
  `;
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
};