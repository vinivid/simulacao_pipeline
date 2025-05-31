import ArqController from "./ArqController";
import { init_dropdown_callbacks, init_mem_buttom } from "./Menu";

init_mem_buttom()
init_dropdown_callbacks()

const arq = new ArqController()
document.getElementById("step-buttom")!.addEventListener('click', () => {arq.step()})