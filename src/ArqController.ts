import { Instruction, InstructionFromStr } from "./Instruction";
import * as painter from "./arqPaint";
import { ArqOp } from "./risc-v_enconding";

export default class ArqController {
    /* São as instruções todas as instruções colocadas para
    simular */
    private insts : Instruction[]

    /* Piped inst é um array que representa qual instrução
    esta em um determinado estagio do pipeline.
       A posição 0 é o IF, 1 = ID, 2 = EX, 3 = MEM,
    4 = WB. Para saber se um estado possui ou não instrução
    é necessario verificar o array pipe_occupied, que guarda se
    uma posição esta ocupada ou não */
    private piped_insts : Instruction[]
    private pipe_occupied : boolean[]
    private insts_on_pipe : number //Quantidade de instruções que estão no pipe

    private paint_funcs : {(vl:ArqOp) : void} []
    private remove_paints : {() : void} []

    private stage_inst_table : HTMLElement[]

    constructor() {
        this.insts = []
        this.piped_insts = []
        this.pipe_occupied = [false, false, false, false, false]
        this.insts_on_pipe = 0

        this.paint_funcs = [painter.paint_if, painter.paint_id, 
            painter.paint_ex, painter.paint_mem, painter.paint_wb
        ]

        this.remove_paints = [painter.remove_paint_if, painter.remove_paint_id, 
            painter.remove_paint_ex, painter.remove_paint_mem, painter.remove_paint_wb
        ]

        const stage_display_thigs = Array.from(document.getElementsByClassName('center-contents-stage-display')) as HTMLElement[]
        this.stage_inst_table = stage_display_thigs.filter((val, index) => index % 2 == 1)
    }

    /**
     *    Coloca as instruções a serem simuladas, cehcando também
     * se elas são validas.
     * 
     * @param instructions As linhas das instruções que serão 
     * simuladas.
     */
    public setInstructions(instructions : string[]) {
        this.insts = []

        instructions.reverse().forEach((inst) => {
            this.insts.push(InstructionFromStr(inst))
        })
    }

    private paint_piped_instructions() {
        this.pipe_occupied.forEach((is_occupied, index) => {
            if (is_occupied) {
                this.paint_funcs[index](this.piped_insts[index].inst_op)
            } else {
                this.remove_paints[index]()
            }
        })
    }

    private update_stage_inst_table() {
        this.pipe_occupied.forEach((val, index) => {
            if (val) {
                this.stage_inst_table[index].innerHTML = this.piped_insts[index].string_repr
            } else {
                this.stage_inst_table[index].innerHTML = ""
            }
        })
    }

    /**
     *   move_pipe_stage_right move os dois arrays relacionados, piped_inst e 
     * ocuppied uma posição para direita. Após mover o primeiro elemento do 
     * pipe sera considerado como desocupado.
     */
    private move_pipe_stage_right() {
        if (this.piped_insts.length > 0) {
            /* Checa sem o ultimo estagio tem uma instrução 
            para remover ela */
            if (this.pipe_occupied[4]) {
                this.pipe_occupied[4] = false
                this.insts_on_pipe -= 1
            }

            /* Movendo as instruções para direita*/
            let prev_occ = this.pipe_occupied[0]
            let prev_inst = this.piped_insts[0]
            this.pipe_occupied[0] = false

            for (let i = 1; i < 5; ++ i) {
                const curr_inst = this.piped_insts[i]
                const curr_occ = this.pipe_occupied[i]
                this.piped_insts[i] = prev_inst
                this.pipe_occupied[i] = prev_occ
                prev_inst = curr_inst
                prev_occ = curr_occ
            }
        }
    }

    /**
     *    Da um passo na simulução, pintando a arquitetura e atualizando a 
     * tabela do estagio das instruções.
     * 
     * @returns returna true se acabaou de simular todas as isntruções
     * e false caso contrario
     */
    public step() : boolean {
        if (this.insts.length == 0 && this.insts_on_pipe == 0) {
            return true;
        }

        this.move_pipe_stage_right()

        /* Colocando uma nova instrução no pipe se ainda existir
        instruções a serem colocadas */
        if (this.insts.length > 0) {
            const new_piped_inst = this.insts.pop()!

            this.piped_insts[0] = new_piped_inst
            this.insts_on_pipe += 1
            this.pipe_occupied[0] = true
        }

        this.paint_piped_instructions()
        this.update_stage_inst_table()

        return false;
    }
}