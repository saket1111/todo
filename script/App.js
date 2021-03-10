import { configureDate } from "./configuredate.js";
import {addEvent} from "./addevent.js";
import {completeAndRemove} from "./completeandremove.js";
import {clearList} from "./clearlist.js";
export const App = () => {
configureDate();
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");
document.addEventListener("keyup",addEvent);
list.addEventListener("click",completeAndRemove);
clear.addEventListener("click",clearList);
};