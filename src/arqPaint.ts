import {IF, ID, EX, MEM, WB} from "./arqMaps"
import { ArqOp } from "./risc-v_enconding"

function paint_cables(cable_map : Map<string, HTMLElement[]>, 
                      cable_class : string,
                      cable_color : string)
{
    cable_map.get(cable_class)!.forEach((cable) => cable.style.backgroundColor = cable_color)
}

/* Em todas as operações o estado de if é igual */
export function paint_if() {
    paint_cables(IF, "pcp-4", "aqua")
    paint_cables(IF, "pc-to-things", "aqua")
}

export function remove_paint_if() {
    paint_cables(IF, "pcp-4", "white")
    paint_cables(IF, "pc-to-things", "white")
}

export function paint_id(op : ArqOp) {
    if (op === ArqOp.R) {
        paint_cables(ID, "rs1", "#f58916")
        paint_cables(ID, "rs2", "#f58916")
        paint_cables(ID, "id-imm", "#1b1a29")
        paint_cables(ID, "id-rd", "white")
        paint_cables(ID, "id-pc", "#1b1a29")
    } else if (op === ArqOp.I || op === ArqOp.LI) {
        paint_cables(ID, "rs1", "#f58916")
        paint_cables(ID, "rs2", "#1b1a29")
        paint_cables(ID, "id-imm", "#f58916")
        paint_cables(ID, "id-rd", "white")
        paint_cables(ID, "id-pc", "#1b1a29")        
    } else if (op === ArqOp.S || op === ArqOp.B) {
        paint_cables(ID, "rs1", "#f58916")
        paint_cables(ID, "rs2", "#f58916")
        paint_cables(ID, "id-imm", "#f58916")
        paint_cables(ID, "id-rd", "#1b1a29")
        paint_cables(ID, "id-pc", "#1b1a29")
    }
}

export function remove_paint_id() {
    paint_cables(ID, "rs1", "white")
    paint_cables(ID, "rs2", "white")
    paint_cables(ID, "id-imm", "white")
    paint_cables(ID, "id-rd", "white")
    paint_cables(ID, "id-pc", "white")    
}

export function paint_ex(op : ArqOp) {
    paint_cables(EX, "alu-ctrl", "green")
    paint_cables(EX, "ex-inst", "#eb1a21")

    if (op === ArqOp.R) {
        paint_cables(EX, "alu-src", "#28f793")
        paint_cables(EX, "ex-pc", "#1b1a29")
        paint_cables(EX, "ex-a", "#eb1a21")
        paint_cables(EX, "ex-zero", "#1b1a29")
        paint_cables(EX, "ex-b", "#eb1a21")
        paint_cables(EX, "ex-imm", "#1b1a29")
        paint_cables(EX, "ex-rd", "white")
    } else if(op === ArqOp.I || op === ArqOp.LI) {
        paint_cables(EX, "alu-src", "green")
        paint_cables(EX, "ex-pc", "#1b1a29")
        paint_cables(EX, "ex-a", "#eb1a21")
        paint_cables(EX, "ex-zero", "#1b1a29")
        paint_cables(EX, "ex-b", "#1b1a29")
        paint_cables(EX, "ex-imm", "#eb1a21")
        paint_cables(EX, "ex-rd", "white")
    } else if (op === ArqOp.S) {
        paint_cables(EX, "alu-src", "green")
        paint_cables(EX, "ex-pc", "#1b1a29")
        paint_cables(EX, "ex-a", "#eb1a21")
        paint_cables(EX, "ex-zero", "#1b1a29")
        paint_cables(EX, "ex-b", "#1b1a29")
        paint_cables(EX, "ex-imm", "#eb1a21")
        paint_cables(EX, "ex-rd", "#1b1a29")
    } else {
        //A diferença do b para o S é q o zero importa
        paint_cables(EX, "alu-src", "green")
        paint_cables(EX, "ex-pc", "#1b1a29")
        paint_cables(EX, "ex-a", "#eb1a21")
        paint_cables(EX, "ex-zero", "white")
        paint_cables(EX, "ex-b", "#1b1a29")
        paint_cables(EX, "ex-imm", "#eb1a21")
        paint_cables(EX, "ex-rd", "#1b1a29")
    }
}

export function remove_paint_ex() {
    paint_cables(EX, "alu-ctrl", "#28f793")
    paint_cables(EX, "ex-inst", "white")
    paint_cables(EX, "alu-src", "#28f793")
    paint_cables(EX, "ex-pc", "white")
    paint_cables(EX, "ex-a", "white")
    paint_cables(EX, "ex-zero", "white")
    paint_cables(EX, "ex-b", "white")
    paint_cables(EX, "ex-imm", "white")
    paint_cables(EX, "ex-rd", "white")
} 

export function paint_mem(op : ArqOp) {
    if (op === ArqOp.R || op === ArqOp.I) {
        paint_cables(MEM, "mem-read", "#28f793")
        paint_cables(MEM, "mem-write", "#28f793")
        paint_cables(MEM, "branch", "#28f793")
        paint_cables(MEM, "mem-zero", "#1b1a29")
        paint_cables(MEM, "b-targ", "#1b1a29")
        paint_cables(MEM, "pc-src", "#28f793")
        paint_cables(MEM, "mem-b", "#1b1a29")
        paint_cables(MEM, "mem-mem", "#1b1a29")
        paint_cables(MEM, "mem-rd", "white")
        paint_cables(MEM, "mem-alu", "white")
    } else if (op === ArqOp.LI) {
        paint_cables(MEM, "mem-read", "green")
        paint_cables(MEM, "mem-write", "#28f793")
        paint_cables(MEM, "branch", "#28f793")
        paint_cables(MEM, "mem-zero", "#1b1a29")
        paint_cables(MEM, "b-targ", "#1b1a29")
        paint_cables(MEM, "pc-src", "#28f793")
        paint_cables(MEM, "mem-b", "#1b1a29")
        paint_cables(MEM, "mem-mem", "white")
        paint_cables(MEM, "mem-rd", "white")
        paint_cables(MEM, "mem-alu", "#ede732")
    } else if (op === ArqOp.S) {
        paint_cables(MEM, "mem-read", "#28f793")
        paint_cables(MEM, "mem-write", "green")
        paint_cables(MEM, "branch", "#28f793")
        paint_cables(MEM, "mem-zero", "#1b1a29")
        paint_cables(MEM, "b-targ", "#1b1a29")
        paint_cables(MEM, "pc-src", "#28f793")
        paint_cables(MEM, "mem-b", "#ede732")
        paint_cables(MEM, "mem-mem", "#1b1a29")
        paint_cables(MEM, "mem-rd", "#1b1a29")
        paint_cables(MEM, "mem-alu", "#ede732") 
    } else {
        paint_cables(MEM, "mem-read", "#28f793")
        paint_cables(MEM, "mem-write", "#28f793")
        paint_cables(MEM, "branch", "#green")
        paint_cables(MEM, "mem-zero", "#ede732")
        paint_cables(MEM, "b-targ", "#ede732")
        paint_cables(MEM, "pc-src", "green")
        paint_cables(MEM, "mem-b", "#1b1a29")
        paint_cables(MEM, "mem-mem", "#1b1a29")
        paint_cables(MEM, "mem-rd", "#1b1a29")
        paint_cables(MEM, "mem-alu", "#1b1a29") 
    }
}

export function remove_paint_mem() {
    paint_cables(MEM, "mem-read", "#28f793")
    paint_cables(MEM, "mem-write", "#28f793")
    paint_cables(MEM, "branch", "#28f793")
    paint_cables(MEM, "mem-zero", "white")
    paint_cables(MEM, "b-targ", "white")
    paint_cables(MEM, "pc-src", "#28f793")
    paint_cables(MEM, "mem-b", "white")
    paint_cables(MEM, "mem-mem", "white")
    paint_cables(MEM, "mem-rd", "white")
    paint_cables(MEM, "mem-alu", "white") 
}

export function paint_wb(op : ArqOp) {
    if (op === ArqOp.R || op === ArqOp.I) {
        paint_cables(WB, "mem-to-reg", "#28f793")
        paint_cables(WB, "reg-write", "green")
        paint_cables(WB, "wb-mem", "#1b1a29")
        paint_cables(WB, "write-data", "slateblue")
        paint_cables(WB, "wb-alu", "slateblue")
        paint_cables(WB, "wb-rd", "slateblue")    
    } else if (op === ArqOp.S || op === ArqOp.B) {
        paint_cables(WB, "mem-to-reg", "#28f793")
        paint_cables(WB, "reg-write", "#28f793")
        paint_cables(WB, "wb-mem", "#1b1a29")
        paint_cables(WB, "write-data", "#1b1a29")
        paint_cables(WB, "wb-alu", "#1b1a29")
        paint_cables(WB, "wb-rd", "#1b1a29")
    } else {
        // É a operação de load
        paint_cables(WB, "mem-to-reg", "green")
        paint_cables(WB, "reg-write", "green")
        paint_cables(WB, "wb-mem", "slateblue")
        paint_cables(WB, "write-data", "slateblue")
        paint_cables(WB, "wb-alu", "#1b1a29")
        paint_cables(WB, "wb-rd", "slateblue")
    }
}

export function remove_paint_wb() {
    paint_cables(WB, "mem-to-reg", "#28f793")
    paint_cables(WB, "reg-write", "#28f793")
    paint_cables(WB, "wb-mem", "white")
    paint_cables(WB, "write-data", "white")
    paint_cables(WB, "wb-alu", "white")
    paint_cables(WB, "wb-rd", "white") 
}