import ArqController from "./ArqController";
import { init_add_button, init_dropdown_callbacks, init_mem_button, init_reset_button, init_sim_buttom } from "./Menu";

init_mem_button()
init_dropdown_callbacks()
init_add_button()
init_reset_button()

const arq = new ArqController()
init_sim_buttom(arq)

document.getElementById("step-button")!.addEventListener('click', () => {arq.step()})