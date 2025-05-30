/*  Esse modulo contem todas as codificações 
  para trabalhar com as instruções do risc-v.  
*/

/* Operações na arq que serão suportados 
no smimulador, em conjunto com seus opcodes.
   As operações representam o que o hardware
deve fazer para completar uma instrução*/
export const enum ArqOp {
    R  = "0110011",
    I  = "0010011",
    S  = "0100011",
    LI = "0000011",   
    B  = "1100011"
}

/* O estado de uma instrução na arquitetura com pipeline*/
export const enum State {
    IF  = 0,
    ID  = 1,
    EX  = 2,
    MEM = 3,
    WB  = 4
}

/* Um mapeia cada instrução para o seu tipo */
export const ArqOpMap = new Map<string, ArqOp>([
    ["add" , ArqOp.R],
    ["sub" , ArqOp.R],
    ["xor" , ArqOp.R],
    ["or" , ArqOp.R],
    ["and" , ArqOp.R],
    ["addi" , ArqOp.I],
    ["lb", ArqOp.LI],
    ["lh", ArqOp.LI],
    ["lw" , ArqOp.LI],
    ["xori" , ArqOp.I],
    ["ori" , ArqOp.I],
    ["sw" , ArqOp.S],
    ["beq" , ArqOp.B],
])

/* Um mapa que mapeia uma instrução para a string 
binaria do funct3 de cada instrção suportada*/
export const InstFunct3Map = new Map<string, string>([
    ["add" , "000"],
    ["sub" , "100"],
    ["xor" , "110"],
    ["or" , "111"],
    ["and" , "001"],
    ["addi" , "000"],
    ["xori" , "110"],
    ["ori" , "111"],
    ["lb", "000"],
    ["lh", "001"],
    ["lw" , "010"],
    ["sw" , "010"],
    ["beq" , "000"],
])

/* Um mapa que mapeia cada registradora para sua string
binaria */
export const RegisterMap = new Map<string, string>([
    ["x0" , "00000"],
    ["x1" , "00001"],
    ["x2" , "00010"],
    ["x3" , "00011"],
    ["x4" , "00100"],
    ["x5" , "00101"],
    ["x6" , "00110"],
    ["x7" , "00111"],
    ["x8" , "01000"],
    ["x9" , "01001"],
    ["x10" , "01010"],
    ["x11" , "01011"],
    ["x12" , "01100"],
    ["x13" , "01101"],
    ["x14" , "01110"],
    ["x15" , "01111"],
    ["x16" , "10000"],
    ["x17" , "10001"],
    ["x18" , "10010"],
    ["x19" , "10011"],
    ["x20" , "10100"],
    ["x21" , "10101"],
    ["x22" , "10110"],
    ["x23" , "10111"],
    ["x24" , "11000"],
    ["x25" , "11001"],
    ["x26" , "11010"],
    ["x27" , "11011"],
    ["x28" , "11100"],
    ["x29" , "11101"],
    ["x30" , "11110"],
    ["x31" , "11111"],
])

function reverse_string(str : string) : string {
    return str.split("").reverse().join("");
}

function imm_to_bin_str(imm : string) : string {
    return reverse_string((parseInt(imm) >> 0).toString(2).padStart(11, '0'))
}

export function inst_fmt_r_str(op_string : string, op : ArqOp, rd : string, 
                                  rs1 : string, rs2 : string
) : string {
    const funct3  = InstFunct3Map.get(op_string)!
    const rd_bin  = RegisterMap.get(rd)!
    const rs1_bin = RegisterMap.get(rs1)!
    const rs2_bin = RegisterMap.get(rs2)!
    let funct7 : string;

    if (op_string === 'sub') {
        funct7 = "00100000"
    } else {
        funct7 = "00000000"
    }

    return funct7 + rs2_bin + rs1_bin + funct3 + rd_bin + op
}

export function inst_fmt_i_str(op_string : string, op : ArqOp, rd : string, 
                                  rs1 : string, imidiate : string
) : string {
    const funct3  = InstFunct3Map.get(op_string)!
    const rd_bin  = RegisterMap.get(rd)!
    const rs1_bin = RegisterMap.get(rs1)!
    const imm     = imm_to_bin_str(imidiate)

    return imm + rs1_bin + funct3 + rd_bin + op
}

export function inst_fmt_s_str(op_string : string, op : ArqOp, rs1 : string, 
                                  rs2 : string, imidiate : string
) : string {
    const funct3  = InstFunct3Map.get(op_string)!
    const rs1_bin  = RegisterMap.get(rs1)!
    const rs2_bin = RegisterMap.get(rs2)!
    const imm     = imm_to_bin_str(imidiate)

    return imm.slice(5, 12) + rs2_bin + rs1_bin + funct3 + imm.slice(0, 5) + op
}

export function inst_fmt_b_str(op_string : string, op : ArqOp, rs1 : string, 
                                  rs2 : string, imidiate : string
) : string {
    const funct3  = InstFunct3Map.get(op_string)!
    const rs1_bin  = RegisterMap.get(rs1)!
    const rs2_bin = RegisterMap.get(rs2)!
    const imm     = imm_to_bin_str(imidiate)

    return imm[9] + imm.slice(5, 11) + rs2_bin + rs1_bin + funct3 + imm.slice(1, 5) + imm[10] + op
}