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

                    console.log(`clicked ${ele.innerHTML}`)
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

                    console.log(`clicked ${ele.innerHTML}`)
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

                    console.log(`clicked ${ele.innerHTML}`)
                    inst_select.children[0].innerHTML = ele.innerHTML
                })    
            } else {
                ele.addEventListener('click', () => {
                    reg1.style.display = 'flex'
                    com1.style.display = 'flex'
                    com_of1.style.display = 'none'
                    com_of2.style.display = 'none'
                    reg2.style.display = 'flex'
                    com2.style.display = 'none'
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

export function init_mem_buttom() {
    const mem_editor = document.getElementById('memory-editor')!
    document.getElementById('mem-buttom')!
        .addEventListener('click', () => {
            if (mem_editor.style.display === 'flex') {
                mem_editor.style.display = 'none'
            } else {
                mem_editor.style.display = 'flex'
            }
        })
}

export function init_dropdown_callbacks() {
    init_inst_selector()
    init_reg_sel("reg1-sel")
    init_reg_sel("reg2-sel")
    init_reg_sel("reg3-sel")
}