import {IF, ID, EX, MEM, WB} from "./arqMaps"
import { ArqOp } from "./risc-v_enconding"

/* Em todas as operações o estado de if é igual */
export function paint_if() {
    IF.get("pcp-4")!.forEach((cable) => cable.style.backgroundColor = 'aqua')
    IF.get("pc-to-things")!.forEach((cable) => cable.style.backgroundColor = 'aqua')
}

export function remove_paint_if() {
      IF.get("pcp-4")!.forEach((cable) => cable.style.backgroundColor = 'white')
    IF.get("pc-to-things")!.forEach((cable) => cable.style.backgroundColor = 'white')
}