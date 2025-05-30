
export const IF = new Map <string, HTMLElement[]>([
    ["pcp-4", Array.from(document.getElementsByClassName("pcp-4")) as HTMLElement[]],
    ["pc-to-things", Array.from(document.getElementsByClassName("pc-to-things")) as HTMLElement[]],
])

export const ID = new Map <string, HTMLElement[]>([
    ["rs1", Array.from(document.getElementsByClassName("rs1")) as HTMLElement[]],
    ["rs2", Array.from(document.getElementsByClassName("rs2")) as HTMLElement[]],
    ["id-imm", Array.from(document.getElementsByClassName("id-imm")) as HTMLElement[]],
    ["id-inst", Array.from(document.getElementsByClassName("id-inst")) as HTMLElement[]],
    ["id-rd", Array.from(document.getElementsByClassName("id-rd")) as HTMLElement[]],
    ["id-wb", Array.from(document.getElementsByClassName("id-wb")) as HTMLElement[]],
    ["id-m", Array.from(document.getElementsByClassName("id-m")) as HTMLElement[]],
    ["id-ex", Array.from(document.getElementsByClassName("id-ex")) as HTMLElement[]],
    ["id-pc", Array.from(document.getElementsByClassName("id-pc")) as HTMLElement[]],
    ["inst-shower", Array.from(document.getElementsByClassName("inst-shower")) as HTMLElement[]]
])

export const EX = new Map <string, HTMLElement[]>([
    ["ex-wb", Array.from(document.getElementsByClassName("ex-wb")) as HTMLElement[]],
    ["ex-m", Array.from(document.getElementsByClassName("ex-m")) as HTMLElement[]],
    ["alu-ctrl", Array.from(document.getElementsByClassName("alu-ctrl")) as HTMLElement[]],
    ["alu-src", Array.from(document.getElementsByClassName("alu-src")) as HTMLElement[]],
    ["ex-pc", Array.from(document.getElementsByClassName("ex-pc")) as HTMLElement[]],
    ["ex-a", Array.from(document.getElementsByClassName("ex-a")) as HTMLElement[]],
    ["ex-zero", Array.from(document.getElementsByClassName("ex-zero")) as HTMLElement[]],
    ["ex-b", Array.from(document.getElementsByClassName("ex-b")) as HTMLElement[]],
    ["ex-imm", Array.from(document.getElementsByClassName("ex-imm")) as HTMLElement[]],
    ["ex-rd", Array.from(document.getElementsByClassName("ex-rd")) as HTMLElement[]],
    ["ex-alu-mux", Array.from(document.getElementsByClassName("ex-alu-mux")) as HTMLElement[]],
    ["ex-alu-res", Array.from(document.getElementsByClassName("ex-alu-res")) as HTMLElement[]],
    ["ex-inst", Array.from(document.getElementsByClassName("ex-inst")) as HTMLElement[]]
])

export const MEM = new Map <string, HTMLElement[]>([
    ["mem-wb", Array.from(document.getElementsByClassName("mem-wb")) as HTMLElement[]],
    ["mem-read", Array.from(document.getElementsByClassName("mem-read")) as HTMLElement[]],
    ["mem-write", Array.from(document.getElementsByClassName("mem-write")) as HTMLElement[]],
    ["branch", Array.from(document.getElementsByClassName("branch")) as HTMLElement[]],
    ["mem-zero", Array.from(document.getElementsByClassName("mem-zero")) as HTMLElement[]],
    ["b-targ", Array.from(document.getElementsByClassName("b-targ")) as HTMLElement[]],
    ["pc-src", Array.from(document.getElementsByClassName("pc-src")) as HTMLElement[]],
    ["mem-b", Array.from(document.getElementsByClassName("mem-b")) as HTMLElement[]],
    ["mem-mem", Array.from(document.getElementsByClassName("mem-mem")) as HTMLElement[]],
    ["mem-rd", Array.from(document.getElementsByClassName("mem-rd")) as HTMLElement[]],
    ["mem-alu", Array.from(document.getElementsByClassName("mem-alu")) as HTMLElement[]]
])

export const WB = new Map <string, HTMLElement[]>([
    ["mem-to-reg", Array.from(document.getElementsByClassName("mem-to-reg")) as HTMLElement[]],
    ["reg-write", Array.from(document.getElementsByClassName("reg-write")) as HTMLElement[]],
    ["wb-mem", Array.from(document.getElementsByClassName("wb-mem")) as HTMLElement[]],
    ["write-data", Array.from(document.getElementsByClassName("write-data")) as HTMLElement[]],
    ["wb-alu", Array.from(document.getElementsByClassName("wb-alu")) as HTMLElement[]],
    ["wb-rd", Array.from(document.getElementsByClassName("wb-rd")) as HTMLElement[]]
])