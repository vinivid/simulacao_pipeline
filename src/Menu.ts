import ArqController from "./ArqController";
import { ArqOpMap, ArqOp } from "./risc-v_enconding"

function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
}

function init_inst_selector() {
    const inst_select = document.getElementById('inst-select')!

    const reg1 = document.getElementById('reg1-sel')!
    const com1 = document.getElementById('comma-one')!
    const com_of1 = document.getElementById('comma-and-ofsset-1')!
    const com_of2 = document.getElementById('comma-and-ofsset-2')!
    const reg2 = document.getElementById('reg2-sel')! 
    const com2 = document.getElementById('comma-two')!
    const imm = document.getElementById('shitty-imm')!
    const reg3 = document.getElementById('reg3-sel')! 

    Array.from(inst_select.children[1].children)
        .forEach((ele) => {
            const op = ArqOpMap.get(ele.innerHTML)!
            if (op === ArqOp.R) {
                ele.addEventListener('click', () => {
                    reg1.style.display = 'flex'
                    com1.style.display = 'flex'
                    com_of1.style.display = 'none'
                    com_of2.style.display = 'none'
                    reg2.style.display = 'flex'
                    com2.style.display = 'flex'
                    imm.style.display = 'none'
                    reg3.style.display = 'flex'

                    inst_select.children[0].innerHTML = ele.innerHTML
                })
            } else if (op === ArqOp.I) {
                ele.addEventListener('click', () => {
                    reg1.style.display = 'flex'
                    com1.style.display = 'flex'
                    com_of1.style.display = 'none'
                    com_of2.style.display = 'none'
                    reg2.style.display = 'flex'
                    com2.style.display = 'flex'
                    imm.style.display = 'flex'
                    reg3.style.display = 'none'
                    document.getElementById('shitty-imm')! 
                        .innerHTML = getRandomInt(32767).toString()

                    inst_select.children[0].innerHTML = ele.innerHTML
                })                
            } else if (op === ArqOp.LI || op === ArqOp.S) {
                ele.addEventListener('click', () => {
                    reg1.style.display = 'flex'
                    com1.style.display = 'none'
                    com_of1.style.display = 'flex'
                    com_of2.style.display = 'flex'
                    reg2.style.display = 'flex'
                    com2.style.display = 'none'
                    imm.style.display = 'none'
                    reg3.style.display = 'none'

                    inst_select.children[0].innerHTML = ele.innerHTML
                })    
            } else {
                ele.addEventListener('click', () => {
                    reg1.style.display = 'flex'
                    com1.style.display = 'flex'
                    com_of1.style.display = 'none'
                    com_of2.style.display = 'none'
                    reg2.style.display = 'flex'
                    com2.style.display = 'flex'
                    imm.style.display = 'flex'
                    reg3.style.display = 'none'
                    document.getElementById('shitty-imm')! 
                        .innerHTML = "4"

                    inst_select.children[0].innerHTML = ele.innerHTML
                })    
            }
        })
}

function init_reg_sel(reg_sel : string) {
    const sel = document.getElementById(reg_sel)!

    Array.from(sel.children[1].children)
        .forEach((ele) => {
            ele.addEventListener('click', () => {
                sel.children[0].innerHTML = ele.innerHTML
            })
        })
}

export function init_add_button() {
    const add_button = document.getElementById('add-inst')!
    const insts_added = document.getElementById('insts-added')!

    add_button.addEventListener('click', () => {
        const inst = document.getElementById('inst-select')!.children[0].innerHTML

        if (inst !== "") {
            const op = ArqOpMap.get(inst)!

            console.log(inst)
            if (op === ArqOp.R) {
                const rd = document.getElementById("reg1-sel")!.children[0].innerHTML
                const rs1 = document.getElementById("reg2-sel")!.children[0].innerHTML
                const rs2 = document.getElementById("reg3-sel")!.children[0].innerHTML

                if (rd !== "" && rs1 !== "" && rs2 !== "") {
                    const new_op = document.createElement('p')
                    const op_string = document.createTextNode(`${inst} ${rd}, ${rs1}, ${rs2}`)
                    new_op.appendChild(op_string)
                    new_op.classList.add("center-contents")
    
                    insts_added.appendChild(new_op)                   
                }
            } else if (op === ArqOp.I) {
                const rd = document.getElementById("reg1-sel")!.children[0].innerHTML
                const rs1 = document.getElementById("reg2-sel")!.children[0].innerHTML
                const imm = document.getElementById("shitty-imm")!.innerHTML

                if (rd !== "" && rs1 !== "") {
                    const new_op = document.createElement('p')
                    const op_string = document.createTextNode(`${inst} ${rd}, ${rs1}, ${imm}`)
                    new_op.appendChild(op_string)
                    new_op.classList.add("center-contents")                    

                    insts_added.appendChild(new_op)  
                }
            } else if (op === ArqOp.LI || op === ArqOp.S) {
                const r1 = document.getElementById("reg1-sel")!.children[0].innerHTML
                const r2 = document.getElementById("reg2-sel")!.children[0].innerHTML

                if (r1 !== "" && r2 !== "") {
                    const new_op = document.createElement('p')
                    const op_string = document.createTextNode(`${inst} ${r1}, 4(${r2})`)
                    new_op.appendChild(op_string)
                    new_op.classList.add("center-contents")

                    insts_added.appendChild(new_op)  
                }
            } else {
                const rs1 = document.getElementById("reg1-sel")!.children[0].innerHTML
                const rs2 = document.getElementById("reg2-sel")!.children[0].innerHTML

                if (rs1 !== "" && rs2 !== "") {
                    const new_op = document.createElement('p')
                    const op_string = document.createTextNode(`${inst} ${rs1}, ${rs2}, 4`)
                    new_op.appendChild(op_string)
                    new_op.classList.add("center-contents")

                    insts_added.appendChild(new_op)  
                }
            }
        }
    })
}

export function init_sim_buttom(arq : ArqController) {
    const sim_buttom = document.getElementById('sim-button')!
    const insts_added = document.getElementById('insts-added')!

    sim_buttom.addEventListener('click', () => {
        const insts_to_sim : string[] = []

        Array.from(insts_added.children).forEach((ele) => insts_to_sim.push(ele.innerHTML))
        console.log(insts_to_sim)
        arq.setInstructions(insts_to_sim)
    })
}

export function init_reset_button() {
    const reset_button = document.getElementById('reset-inst')!
    const insts_added = document.getElementById('insts-added')!

    reset_button.addEventListener('click', () => {
        Array.from(insts_added.children).forEach((ele) => ele.remove())
    })
}

export function init_dropdown_callbacks() {
    init_inst_selector()
    init_reg_sel("reg1-sel")
    init_reg_sel("reg2-sel")
    init_reg_sel("reg3-sel")
}

export function init_mem_button() {
    const mem_editor = document.getElementById('memory-editor')!
    document.getElementById('mem-button')!
        .addEventListener('click', () => {
            if (mem_editor.style.display === 'flex') {
                mem_editor.style.display = 'none'
            } else {
                mem_editor.style.display = 'flex'
            }
        })
}