import { Instruction, InstructionFromStr } from "./Instruction";
import { ArqOp } from "./risc-v_enconding";
import { paint_if, paint_id, paint_ex, paint_mem, paint_wb, remove_paint_id, remove_paint_if, remove_paint_ex, remove_paint_mem, remove_paint_wb} from "./arqPaint";

console.log(InstructionFromStr("addi x0, x1, 16"))
paint_if()
paint_id(ArqOp.B)
paint_ex(ArqOp.B)
paint_mem(ArqOp.R)
paint_wb(ArqOp.LI)