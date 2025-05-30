import ArqController from "./ArqController";

const arq = new ArqController()
document.getElementById("step-buttom")!.addEventListener('click', () => {arq.step()})