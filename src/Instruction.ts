import * as risc_v from "./risc-v_enconding"

export interface Instruction {
    state : risc_v.State;
    binary_repr : string;
    string_repr : string;
    inst_op : risc_v.ArqOp;
}

function creat_bin_rep(tokens : string[], type : risc_v.ArqOp) : string {
    if (type === risc_v.ArqOp.R) {
        return risc_v.inst_fmt_r_str(tokens[0], type, tokens[1], tokens[2], tokens[3])
    } else if (type === risc_v.ArqOp.I) {
        return risc_v.inst_fmt_i_str(tokens[0], type, tokens[1], tokens[2], tokens[3])
    } else if (type === risc_v.ArqOp.LI) {
        return risc_v.inst_fmt_i_str(tokens[0], type, tokens[1], tokens[3], tokens[2])
    } else if (type === risc_v.ArqOp.S) {
        return risc_v.inst_fmt_s_str(tokens[0], type, tokens[1], tokens[3], tokens[2])
    } else if (type === risc_v.ArqOp.B) {
        return risc_v.inst_fmt_b_str(tokens[0], type, tokens[1], tokens[2], tokens[3])
    } else {
        return "Erro"
    }
}

export function InstructionFromStr(str : string) : Instruction {
    const str_rep = str.trim()
    const tokens  = str_rep.split(new RegExp(/[,\s()]+/)).filter(Boolean)
    const i_op = risc_v.ArqOpMap.get(tokens[0])!
    const st = risc_v.State.IF
    const bin_rep = creat_bin_rep(tokens, i_op)
    
    return {state : st, binary_repr : bin_rep, string_repr : str_rep, inst_op : i_op}
}