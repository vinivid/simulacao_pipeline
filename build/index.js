"use strict";
var InstructionType;
(function (InstructionType) {
    InstructionType[InstructionType["R"] = 0] = "R";
    InstructionType[InstructionType["I"] = 1] = "I";
    InstructionType[InstructionType["S"] = 2] = "S";
    InstructionType[InstructionType["B"] = 3] = "B";
})(InstructionType || (InstructionType = {}));
var State;
(function (State) {
    State[State["IF"] = 0] = "IF";
    State[State["ID"] = 1] = "ID";
    State[State["EX"] = 2] = "EX";
    State[State["MEM"] = 3] = "MEM";
    State[State["WB"] = 4] = "WB";
})(State || (State = {}));
const InstructionTypeDict = {
    "add": InstructionType.R,
    "sub": InstructionType.R,
    "xor": InstructionType.R,
    "or": InstructionType.R,
    "and": InstructionType.R,
    "addi": InstructionType.I,
    "lw": InstructionType.I,
    "xori": InstructionType.I,
    "ori": InstructionType.I,
    "sw": InstructionType.S,
    "beq": InstructionType.B
};
const InstOpCodeDict = {
    "add": ["0110011", "000"],
    "sub": ["0110011", "100"],
    "xor": ["0110011", "110"],
    "or": ["0110011", "111"],
    "and": ["0110011", "001"],
    "addi": ["0010011", "000"],
    "xori": ["0010011", "110"],
    "ori": ["0010011", "111"],
    "lw": ["0000011", "010"],
    "sw": ["0100011", "010"],
    "beq": ["1100011", "000"]
};
const RegisterDict = {
    "x0": "00000",
    "x1": "00001",
    "x2": "00010",
    "x3": "00011",
    "x4": "00100",
    "x5": "00101",
    "x6": "00110",
    "x7": "00111",
    "x8": "01000",
    "x9": "01001",
    "x10": "01010",
    "x11": "01011",
    "x12": "01100",
    "x13": "01101",
    "x14": "01110",
    "x15": "01111",
    "x16": "10000",
    "x17": "10001",
    "x18": "10010",
    "x19": "10011",
    "x20": "10100",
    "x21": "10101",
    "x22": "10110",
    "x23": "10111",
    "x24": "11000",
    "x25": "11001",
    "x26": "11010",
    "x27": "11011",
    "x28": "11100",
    "x29": "11101",
    "x30": "11110",
    "x31": "11111",
};
class Instruction {
    /* Essa função transforma um número inteiro para sua representação
    binaria em uma string, colocando zeros o suficientes para dar 11 bits,
    de forma que a função de criar a representação binaria possa usa-la*/
    dec_to_bin(int) {
        let str_val = (int >>> 0).toString(2);
        return str_val.padEnd(11, '0');
    }
    /* Cria a representção binaria da instrução passada, em essência
    checa qual tipo de instrução é e cria uma nova string na mesma ordem
    da instrução */
    creat_bin_rep(tokens, type) {
        let op_and_f3;
        let rd;
        let rs1;
        let rs2;
        let imm;
        switch (type) {
            case InstructionType.R:
                op_and_f3 = InstOpCodeDict[tokens[0]];
                rd = RegisterDict[tokens[1]];
                rs1 = RegisterDict[tokens[2]];
                rs2 = RegisterDict[tokens[3]];
                let funct7;
                if (tokens[0] === 'sub') {
                    funct7 = "00100000";
                }
                else {
                    funct7 = "00000000";
                }
                return op_and_f3[0] + rd + op_and_f3[1] + rs1 + rs2 + funct7;
            case InstructionType.I:
                /* A operação de load tem o imediato em uma posição diferente entao
                tem q ter um caso especifico*/
                if (tokens[0].startsWith('l')) {
                    op_and_f3 = InstOpCodeDict[tokens[0]];
                    rd = RegisterDict[tokens[1]];
                    rs1 = RegisterDict[tokens[3]];
                    imm = this.dec_to_bin(parseInt(tokens[2]));
                }
                else {
                    op_and_f3 = InstOpCodeDict[tokens[0]];
                    rd = RegisterDict[tokens[1]];
                    rs1 = RegisterDict[tokens[2]];
                    imm = this.dec_to_bin(parseInt(tokens[3]));
                }
                return op_and_f3[0] + rd + op_and_f3[1] + rs1 + imm;
            case InstructionType.S:
                op_and_f3 = InstOpCodeDict[tokens[0]];
                rs1 = RegisterDict[tokens[2]];
                imm = this.dec_to_bin(parseInt(tokens[3]));
                rs2 = RegisterDict[tokens[4]];
                return op_and_f3[0] + imm.slice(0, 5) + op_and_f3[1] + rs1 + rs2 + imm.slice(5, 12);
            case InstructionType.B:
                op_and_f3 = InstOpCodeDict[tokens[0]];
                rs1 = RegisterDict[tokens[1]];
                rs2 = RegisterDict[tokens[2]];
                imm = this.dec_to_bin(parseInt(tokens[3]));
                return op_and_f3[0] + imm[10] + imm.slice(1, 5) + op_and_f3[1] + rs1 + rs2 + imm.slice(5, 11) + imm[11];
        }
    }
    constructor(str_inst) {
        this.string_representation = str_inst.trim();
        let tokens = str_inst.split(new RegExp(/[,\s()]+/)).filter(Boolean);
        this.instruction_type = InstructionTypeDict[tokens[0]];
        this.state_current = State.IF;
        this.binary_representation = this.creat_bin_rep(tokens, this.instruction_type);
    }
    toString() {
        let res_string = "Estado: ";
        switch (this.state_current) {
            case State.IF:
                res_string += "IF\n";
                break;
            case State.EX:
                res_string += "EX\n";
                break;
            case State.ID:
                res_string += "ID\n";
                break;
            case State.MEM:
                res_string += "MEM\n";
                break;
            case State.WB:
                res_string += "WB\n";
                break;
        }
        res_string += "Binary representation: " + this.binary_representation + "\n";
        res_string += "String representation: " + this.string_representation + "\n";
        res_string += "Instruction type: ";
        switch (this.instruction_type) {
            case InstructionType.R:
                res_string += "R\n";
                break;
            case InstructionType.I:
                res_string += "I\n";
                break;
            case InstructionType.S:
                res_string += "S\n";
                break;
            case InstructionType.B:
                res_string += "B\n";
                break;
        }
        return res_string;
    }
}
console.log(new Instruction("lw x1, 4(x2)").toString());
