import { Instruction, InstructionFromStr } from "./Instruction";
import { paint_if } from "./arqPaint";

console.log(InstructionFromStr("addi x0, x1, 16"))
paint_if()