import { add_explanation_to_all } from "./arqCables";
import ArqController from "./ArqController";
import { ID, IF } from "./arqMaps";
import { init_add_button, init_dropdown_callbacks, init_exp_button, init_mem_button, init_reset_button, init_sim_buttom } from "./Menu";

init_mem_button()
init_dropdown_callbacks()
init_add_button()
init_reset_button()
add_explanation_to_all()
init_exp_button()

const arq = new ArqController()
init_sim_buttom(arq)

const pc = IF.get('pc-to-things')!
const exp = document.getElementById('pc-to-things-exp')!

document.getElementById("step-button")!.addEventListener('click', () => {arq.step()})