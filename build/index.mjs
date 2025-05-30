var C = Object.defineProperty;
var N = (t, r, i) => r in t ? C(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i;
var b = (t, r, i) => N(t, typeof r != "symbol" ? r + "" : r, i);
var n = /* @__PURE__ */ ((t) => (t.R = "0110011", t.I = "0010011", t.S = "0100011", t.LI = "0000011", t.B = "1100011", t))(n || {}), E = /* @__PURE__ */ ((t) => (t[t.IF = 0] = "IF", t[t.ID = 1] = "ID", t[t.EX = 2] = "EX", t[t.MEM = 3] = "MEM", t[t.WB = 4] = "WB", t))(E || {});
const A = /* @__PURE__ */ new Map([
  [
    "add",
    "0110011"
    /* R */
  ],
  [
    "sub",
    "0110011"
    /* R */
  ],
  [
    "xor",
    "0110011"
    /* R */
  ],
  [
    "or",
    "0110011"
    /* R */
  ],
  [
    "and",
    "0110011"
    /* R */
  ],
  [
    "addi",
    "0010011"
    /* I */
  ],
  [
    "lb",
    "0000011"
    /* LI */
  ],
  [
    "lh",
    "0000011"
    /* LI */
  ],
  [
    "lw",
    "0000011"
    /* LI */
  ],
  [
    "xori",
    "0010011"
    /* I */
  ],
  [
    "ori",
    "0010011"
    /* I */
  ],
  [
    "sw",
    "0100011"
    /* S */
  ],
  [
    "beq",
    "1100011"
    /* B */
  ]
]), x = /* @__PURE__ */ new Map([
  ["add", "000"],
  ["sub", "100"],
  ["xor", "110"],
  ["or", "111"],
  ["and", "001"],
  ["addi", "000"],
  ["xori", "110"],
  ["ori", "111"],
  ["lb", "000"],
  ["lh", "001"],
  ["lw", "010"],
  ["sw", "010"],
  ["beq", "000"]
]), f = /* @__PURE__ */ new Map([
  ["x0", "00000"],
  ["x1", "00001"],
  ["x2", "00010"],
  ["x3", "00011"],
  ["x4", "00100"],
  ["x5", "00101"],
  ["x6", "00110"],
  ["x7", "00111"],
  ["x8", "01000"],
  ["x9", "01001"],
  ["x10", "01010"],
  ["x11", "01011"],
  ["x12", "01100"],
  ["x13", "01101"],
  ["x14", "01110"],
  ["x15", "01111"],
  ["x16", "10000"],
  ["x17", "10001"],
  ["x18", "10010"],
  ["x19", "10011"],
  ["x20", "10100"],
  ["x21", "10101"],
  ["x22", "10110"],
  ["x23", "10111"],
  ["x24", "11000"],
  ["x25", "11001"],
  ["x26", "11010"],
  ["x27", "11011"],
  ["x28", "11100"],
  ["x29", "11101"],
  ["x30", "11110"],
  ["x31", "11111"]
]);
function I(t) {
  return t.split("").reverse().join("");
}
function w(t) {
  return I((parseInt(t) >> 0).toString(2).padStart(11, "0"));
}
function v(t, r, i, c, l) {
  const d = x.get(t), p = f.get(i), _ = f.get(c), u = f.get(l);
  let h;
  return t === "sub" ? h = "00100000" : h = "00000000", h + u + _ + d + p + r;
}
function y(t, r, i, c, l) {
  const d = x.get(t), p = f.get(i), _ = f.get(c);
  return w(l) + _ + d + p + r;
}
function M(t, r, i, c, l) {
  const d = x.get(t), p = f.get(i), _ = f.get(c), u = w(l);
  return u.slice(5, 12) + _ + p + d + u.slice(0, 5) + r;
}
function z(t, r, i, c, l) {
  const d = x.get(t), p = f.get(i), _ = f.get(c), u = w(l);
  return u[9] + u.slice(5, 11) + _ + p + d + u.slice(1, 5) + u[10] + r;
}
function L(t, r) {
  return r === n.R ? v(t[0], r, t[1], t[2], t[3]) : r === n.I ? y(t[0], r, t[1], t[2], t[3]) : r === n.LI ? y(t[0], r, t[1], t[3], t[2]) : r === n.S ? M(t[0], r, t[1], t[3], t[2]) : r === n.B ? z(t[0], r, t[1], t[2], t[3]) : "Erro";
}
function R(t) {
  const r = t.trim(), i = r.split(new RegExp(/[,\s()]+/)).filter(Boolean), c = A.get(i[0]), l = E.IF, d = L(i, c);
  return { state: l, binary_repr: d, string_repr: r, inst_op: c };
}
const g = /* @__PURE__ */ new Map([
  ["pcp-4", Array.from(document.getElementsByClassName("pcp-4"))],
  ["pc-to-things", Array.from(document.getElementsByClassName("pc-to-things"))]
]), o = /* @__PURE__ */ new Map([
  ["rs1", Array.from(document.getElementsByClassName("rs1"))],
  ["rs2", Array.from(document.getElementsByClassName("rs2"))],
  ["id-imm", Array.from(document.getElementsByClassName("id-imm"))],
  ["id-inst", Array.from(document.getElementsByClassName("id-inst"))],
  ["id-rd", Array.from(document.getElementsByClassName("id-rd"))],
  ["id-wb", Array.from(document.getElementsByClassName("id-wb"))],
  ["id-m", Array.from(document.getElementsByClassName("id-m"))],
  ["id-ex", Array.from(document.getElementsByClassName("id-ex"))],
  ["id-pc", Array.from(document.getElementsByClassName("id-pc"))],
  ["inst-shower", Array.from(document.getElementsByClassName("inst-shower"))]
]), m = /* @__PURE__ */ new Map([
  ["ex-wb", Array.from(document.getElementsByClassName("ex-wb"))],
  ["ex-m", Array.from(document.getElementsByClassName("ex-m"))],
  ["alu-ctrl", Array.from(document.getElementsByClassName("alu-ctrl"))],
  ["alu-src", Array.from(document.getElementsByClassName("alu-src"))],
  ["ex-pc", Array.from(document.getElementsByClassName("ex-pc"))],
  ["ex-a", Array.from(document.getElementsByClassName("ex-a"))],
  ["ex-zero", Array.from(document.getElementsByClassName("ex-zero"))],
  ["ex-b", Array.from(document.getElementsByClassName("ex-b"))],
  ["ex-imm", Array.from(document.getElementsByClassName("ex-imm"))],
  ["ex-rd", Array.from(document.getElementsByClassName("ex-rd"))],
  ["ex-alu-mux", Array.from(document.getElementsByClassName("ex-alu-mux"))],
  ["ex-alu-res", Array.from(document.getElementsByClassName("ex-alu-res"))],
  ["ex-inst", Array.from(document.getElementsByClassName("ex-inst"))]
]), s = /* @__PURE__ */ new Map([
  ["mem-wb", Array.from(document.getElementsByClassName("mem-wb"))],
  ["mem-read", Array.from(document.getElementsByClassName("mem-read"))],
  ["mem-write", Array.from(document.getElementsByClassName("mem-write"))],
  ["branch", Array.from(document.getElementsByClassName("branch"))],
  ["mem-zero", Array.from(document.getElementsByClassName("mem-zero"))],
  ["b-targ", Array.from(document.getElementsByClassName("b-targ"))],
  ["pc-src", Array.from(document.getElementsByClassName("pc-src"))],
  ["mem-b", Array.from(document.getElementsByClassName("mem-b"))],
  ["mem-mem", Array.from(document.getElementsByClassName("mem-mem"))],
  ["mem-rd", Array.from(document.getElementsByClassName("mem-rd"))],
  ["mem-alu", Array.from(document.getElementsByClassName("mem-alu"))]
]), a = /* @__PURE__ */ new Map([
  ["mem-to-reg", Array.from(document.getElementsByClassName("mem-to-reg"))],
  ["reg-write", Array.from(document.getElementsByClassName("reg-write"))],
  ["wb-mem", Array.from(document.getElementsByClassName("wb-mem"))],
  ["write-data", Array.from(document.getElementsByClassName("write-data"))],
  ["wb-alu", Array.from(document.getElementsByClassName("wb-alu"))],
  ["wb-rd", Array.from(document.getElementsByClassName("wb-rd"))]
]);
function e(t, r, i) {
  t.get(r).forEach((c) => c.style.backgroundColor = i);
}
function F(t) {
  e(g, "pcp-4", "aqua"), e(g, "pc-to-things", "aqua");
}
function q() {
  e(g, "pcp-4", "white"), e(g, "pc-to-things", "white");
}
function D(t) {
  t === n.R ? (e(o, "rs1", "#f58916"), e(o, "rs2", "#f58916"), e(o, "id-imm", "#1b1a29"), e(o, "id-rd", "white"), e(o, "id-pc", "#1b1a29")) : t === n.I || t === n.LI ? (e(o, "rs1", "#f58916"), e(o, "rs2", "#1b1a29"), e(o, "id-imm", "#f58916"), e(o, "id-rd", "white"), e(o, "id-pc", "#1b1a29")) : (t === n.S || t === n.B) && (e(o, "rs1", "#f58916"), e(o, "rs2", "#f58916"), e(o, "id-imm", "#f58916"), e(o, "id-rd", "#1b1a29"), e(o, "id-pc", "#1b1a29"));
}
function W() {
  e(o, "rs1", "white"), e(o, "rs2", "white"), e(o, "id-imm", "white"), e(o, "id-rd", "white"), e(o, "id-pc", "white");
}
function X(t) {
  e(m, "alu-ctrl", "green"), e(m, "ex-inst", "#eb1a21"), t === n.R ? (e(m, "alu-src", "#28f793"), e(m, "ex-pc", "#1b1a29"), e(m, "ex-a", "#eb1a21"), e(m, "ex-zero", "#1b1a29"), e(m, "ex-b", "#eb1a21"), e(m, "ex-imm", "#1b1a29"), e(m, "ex-rd", "white")) : t === n.I || t === n.LI ? (e(m, "alu-src", "green"), e(m, "ex-pc", "#1b1a29"), e(m, "ex-a", "#eb1a21"), e(m, "ex-zero", "#1b1a29"), e(m, "ex-b", "#1b1a29"), e(m, "ex-imm", "#eb1a21"), e(m, "ex-rd", "white")) : t === n.S ? (e(m, "alu-src", "green"), e(m, "ex-pc", "#1b1a29"), e(m, "ex-a", "#eb1a21"), e(m, "ex-zero", "#1b1a29"), e(m, "ex-b", "#1b1a29"), e(m, "ex-imm", "#eb1a21"), e(m, "ex-rd", "#1b1a29")) : (e(m, "alu-src", "green"), e(m, "ex-pc", "#1b1a29"), e(m, "ex-a", "#eb1a21"), e(m, "ex-zero", "white"), e(m, "ex-b", "#1b1a29"), e(m, "ex-imm", "#eb1a21"), e(m, "ex-rd", "#1b1a29"));
}
function H() {
  e(m, "alu-ctrl", "#28f793"), e(m, "ex-inst", "white"), e(m, "alu-src", "#28f793"), e(m, "ex-pc", "white"), e(m, "ex-a", "white"), e(m, "ex-zero", "white"), e(m, "ex-b", "white"), e(m, "ex-imm", "white"), e(m, "ex-rd", "white");
}
function T(t) {
  t === n.R || t === n.I ? (e(s, "mem-read", "#28f793"), e(s, "mem-write", "#28f793"), e(s, "branch", "#28f793"), e(s, "mem-zero", "#1b1a29"), e(s, "b-targ", "#1b1a29"), e(s, "pc-src", "#28f793"), e(s, "mem-b", "#1b1a29"), e(s, "mem-mem", "#1b1a29"), e(s, "mem-rd", "white"), e(s, "mem-alu", "white")) : t === n.LI ? (e(s, "mem-read", "green"), e(s, "mem-write", "#28f793"), e(s, "branch", "#28f793"), e(s, "mem-zero", "#1b1a29"), e(s, "b-targ", "#1b1a29"), e(s, "pc-src", "#28f793"), e(s, "mem-b", "#1b1a29"), e(s, "mem-mem", "white"), e(s, "mem-rd", "white"), e(s, "mem-alu", "#ede732")) : t === n.S ? (e(s, "mem-read", "#28f793"), e(s, "mem-write", "green"), e(s, "branch", "#28f793"), e(s, "mem-zero", "#1b1a29"), e(s, "b-targ", "#1b1a29"), e(s, "pc-src", "#28f793"), e(s, "mem-b", "#ede732"), e(s, "mem-mem", "#1b1a29"), e(s, "mem-rd", "#1b1a29"), e(s, "mem-alu", "#ede732")) : (e(s, "mem-read", "#28f793"), e(s, "mem-write", "#28f793"), e(s, "branch", "#green"), e(s, "mem-zero", "#ede732"), e(s, "b-targ", "#ede732"), e(s, "pc-src", "green"), e(s, "mem-b", "#1b1a29"), e(s, "mem-mem", "#1b1a29"), e(s, "mem-rd", "#1b1a29"), e(s, "mem-alu", "#1b1a29"));
}
function j() {
  e(s, "mem-read", "#28f793"), e(s, "mem-write", "#28f793"), e(s, "branch", "#28f793"), e(s, "mem-zero", "white"), e(s, "b-targ", "white"), e(s, "pc-src", "#28f793"), e(s, "mem-b", "white"), e(s, "mem-mem", "white"), e(s, "mem-rd", "white"), e(s, "mem-alu", "white");
}
function G(t) {
  t === n.R || t === n.I ? (e(a, "mem-to-reg", "#28f793"), e(a, "reg-write", "green"), e(a, "wb-mem", "#1b1a29"), e(a, "write-data", "slateblue"), e(a, "wb-alu", "slateblue"), e(a, "wb-rd", "slateblue")) : t === n.S || t === n.B ? (e(a, "mem-to-reg", "#28f793"), e(a, "reg-write", "#28f793"), e(a, "wb-mem", "#1b1a29"), e(a, "write-data", "#1b1a29"), e(a, "wb-alu", "#1b1a29"), e(a, "wb-rd", "#1b1a29")) : (e(a, "mem-to-reg", "green"), e(a, "reg-write", "green"), e(a, "wb-mem", "slateblue"), e(a, "write-data", "slateblue"), e(a, "wb-alu", "#1b1a29"), e(a, "wb-rd", "slateblue"));
}
function J() {
  e(a, "mem-to-reg", "#28f793"), e(a, "reg-write", "#28f793"), e(a, "wb-mem", "white"), e(a, "write-data", "white"), e(a, "wb-alu", "white"), e(a, "wb-rd", "white");
}
class K {
  constructor() {
    /* São as instruções todas as instruções colocadas para
    simular */
    b(this, "insts");
    /* Piped inst é um array que representa qual instrução
    esta em um determinado estagio do pipeline.
       A posição 0 é o IF, 1 = ID, 2 = EX, 3 = MEM,
    4 = WB. Para saber se um estado possui ou não instrução
    é necessario verificar o array pipe_occupied, que guarda se
    uma posição esta ocupada ou não */
    b(this, "piped_insts");
    b(this, "pipe_occupied");
    b(this, "insts_on_pipe");
    //Quantidade de instruções que estão no pipe
    b(this, "paint_funcs");
    b(this, "remove_paints");
    b(this, "stage_inst_table");
    this.insts = [], this.piped_insts = [], this.pipe_occupied = [!1, !1, !1, !1, !1], this.insts_on_pipe = 0, this.paint_funcs = [
      F,
      D,
      X,
      T,
      G
    ], this.remove_paints = [
      q,
      W,
      H,
      j,
      J
    ];
    const r = Array.from(document.getElementsByClassName("center-contents-stage-display"));
    this.stage_inst_table = r.filter((i, c) => c % 2 == 1);
  }
  /**
   *    Coloca as instruções a serem simuladas, cehcando também
   * se elas são validas.
   * 
   * @param instructions As linhas das instruções que serão 
   * simuladas.
   */
  setInstructions(r) {
    this.insts = [], r.reverse().forEach((i) => {
      this.insts.push(R(i));
    });
  }
  paint_piped_instructions() {
    this.pipe_occupied.forEach((r, i) => {
      r ? this.paint_funcs[i](this.piped_insts[i].inst_op) : this.remove_paints[i]();
    });
  }
  update_stage_inst_table() {
    this.pipe_occupied.forEach((r, i) => {
      r ? this.stage_inst_table[i].innerHTML = this.piped_insts[i].string_repr : this.stage_inst_table[i].innerHTML = "";
    });
  }
  /**
   *   move_pipe_stage_right move os dois arrays relacionados, piped_inst e 
   * ocuppied uma posição para direita. Após mover o primeiro elemento do 
   * pipe sera considerado como desocupado.
   */
  move_pipe_stage_right() {
    if (this.piped_insts.length > 0) {
      this.pipe_occupied[4] && (this.pipe_occupied[4] = !1, this.insts_on_pipe -= 1);
      let r = this.pipe_occupied[0], i = this.piped_insts[0];
      this.pipe_occupied[0] = !1;
      for (let c = 1; c < 5; ++c) {
        const l = this.piped_insts[c], d = this.pipe_occupied[c];
        this.piped_insts[c] = i, this.pipe_occupied[c] = r, i = l, r = d;
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
  step() {
    if (this.insts.length == 0 && this.insts_on_pipe == 0)
      return !0;
    if (this.move_pipe_stage_right(), this.insts.length > 0) {
      const r = this.insts.pop();
      this.piped_insts[0] = r, this.insts_on_pipe += 1, this.pipe_occupied[0] = !0;
    }
    return this.paint_piped_instructions(), this.update_stage_inst_table(), !1;
  }
}
const P = ["addi x0, x1, 3", "sw x12, 0(x3)", "sub x0, x1, x2", "beq x4, x7, 10", "lw x1, 0(x4)", "add x18, x21, x23"], B = new K();
B.setInstructions(P);
document.getElementById("step-buttom").addEventListener("click", () => {
  B.step();
});
