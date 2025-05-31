var N = Object.defineProperty;
var I = (t, s, r) => s in t ? N(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[s] = r;
var b = (t, s, r) => I(t, typeof s != "symbol" ? s + "" : s, r);
var m = /* @__PURE__ */ ((t) => (t.R = "0110011", t.I = "0010011", t.S = "0100011", t.LI = "0000011", t.B = "1100011", t))(m || {}), C = /* @__PURE__ */ ((t) => (t[t.IF = 0] = "IF", t[t.ID = 1] = "ID", t[t.EX = 2] = "EX", t[t.MEM = 3] = "MEM", t[t.WB = 4] = "WB", t))(C || {});
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
]), g = /* @__PURE__ */ new Map([
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
function M(t) {
  return t.split("").reverse().join("");
}
function E(t) {
  return M((parseInt(t) >> 0).toString(2).padStart(11, "0"));
}
function L(t, s, r, a, c) {
  const d = x.get(t), y = g.get(r), p = g.get(a), u = g.get(c);
  let f;
  return t === "sub" ? f = "00100000" : f = "00000000", f + u + p + d + y + s;
}
function B(t, s, r, a, c) {
  const d = x.get(t), y = g.get(r), p = g.get(a);
  return E(c) + p + d + y + s;
}
function v(t, s, r, a, c) {
  const d = x.get(t), y = g.get(r), p = g.get(a), u = E(c);
  return u.slice(5, 12) + p + y + d + u.slice(0, 5) + s;
}
function H(t, s, r, a, c) {
  const d = x.get(t), y = g.get(r), p = g.get(a), u = E(c);
  return u[9] + u.slice(5, 11) + p + y + d + u.slice(1, 5) + u[10] + s;
}
function T(t, s) {
  return s === m.R ? L(t[0], s, t[1], t[2], t[3]) : s === m.I ? B(t[0], s, t[1], t[2], t[3]) : s === m.LI ? B(t[0], s, t[1], t[3], t[2]) : s === m.S ? v(t[0], s, t[1], t[3], t[2]) : s === m.B ? H(t[0], s, t[1], t[2], t[3]) : "Erro";
}
function z(t) {
  const s = t.trim(), r = s.split(new RegExp(/[,\s()]+/)).filter(Boolean), a = A.get(r[0]), c = C.IF, d = T(r, a);
  return { state: c, binary_repr: d, string_repr: s, inst_op: a };
}
const h = /* @__PURE__ */ new Map([
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
]), i = /* @__PURE__ */ new Map([
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
]), n = /* @__PURE__ */ new Map([
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
]), l = /* @__PURE__ */ new Map([
  ["mem-to-reg", Array.from(document.getElementsByClassName("mem-to-reg"))],
  ["reg-write", Array.from(document.getElementsByClassName("reg-write"))],
  ["wb-mem", Array.from(document.getElementsByClassName("wb-mem"))],
  ["write-data", Array.from(document.getElementsByClassName("write-data"))],
  ["wb-alu", Array.from(document.getElementsByClassName("wb-alu"))],
  ["wb-rd", Array.from(document.getElementsByClassName("wb-rd"))]
]);
function e(t, s, r) {
  t.get(s).forEach((a) => a.style.backgroundColor = r);
}
function R(t) {
  e(h, "pcp-4", "aqua"), e(h, "pc-to-things", "aqua");
}
function F() {
  e(h, "pcp-4", "white"), e(h, "pc-to-things", "white");
}
function q(t) {
  t === m.R ? (e(o, "rs1", "#f58916"), e(o, "rs2", "#f58916"), e(o, "id-imm", "#1b1a29"), e(o, "id-rd", "white"), e(o, "id-pc", "#1b1a29")) : t === m.I || t === m.LI ? (e(o, "rs1", "#f58916"), e(o, "rs2", "#1b1a29"), e(o, "id-imm", "#f58916"), e(o, "id-rd", "white"), e(o, "id-pc", "#1b1a29")) : (t === m.S || t === m.B) && (e(o, "rs1", "#f58916"), e(o, "rs2", "#f58916"), e(o, "id-imm", "#f58916"), e(o, "id-rd", "#1b1a29"), e(o, "id-pc", "#1b1a29"));
}
function D() {
  e(o, "rs1", "white"), e(o, "rs2", "white"), e(o, "id-imm", "white"), e(o, "id-rd", "white"), e(o, "id-pc", "white");
}
function W(t) {
  e(i, "alu-ctrl", "green"), e(i, "ex-inst", "#eb1a21"), t === m.R ? (e(i, "alu-src", "#28f793"), e(i, "ex-pc", "#1b1a29"), e(i, "ex-a", "#eb1a21"), e(i, "ex-zero", "#1b1a29"), e(i, "ex-b", "#eb1a21"), e(i, "ex-imm", "#1b1a29"), e(i, "ex-rd", "white")) : t === m.I || t === m.LI ? (e(i, "alu-src", "green"), e(i, "ex-pc", "#1b1a29"), e(i, "ex-a", "#eb1a21"), e(i, "ex-zero", "#1b1a29"), e(i, "ex-b", "#1b1a29"), e(i, "ex-imm", "#eb1a21"), e(i, "ex-rd", "white")) : t === m.S ? (e(i, "alu-src", "green"), e(i, "ex-pc", "#1b1a29"), e(i, "ex-a", "#eb1a21"), e(i, "ex-zero", "#1b1a29"), e(i, "ex-b", "#1b1a29"), e(i, "ex-imm", "#eb1a21"), e(i, "ex-rd", "#1b1a29")) : (e(i, "alu-src", "green"), e(i, "ex-pc", "#1b1a29"), e(i, "ex-a", "#eb1a21"), e(i, "ex-zero", "white"), e(i, "ex-b", "#1b1a29"), e(i, "ex-imm", "#eb1a21"), e(i, "ex-rd", "#1b1a29"));
}
function X() {
  e(i, "alu-ctrl", "#28f793"), e(i, "ex-inst", "white"), e(i, "alu-src", "#28f793"), e(i, "ex-pc", "white"), e(i, "ex-a", "white"), e(i, "ex-zero", "white"), e(i, "ex-b", "white"), e(i, "ex-imm", "white"), e(i, "ex-rd", "white");
}
function $(t) {
  t === m.R || t === m.I ? (e(n, "mem-read", "#28f793"), e(n, "mem-write", "#28f793"), e(n, "branch", "#28f793"), e(n, "mem-zero", "#1b1a29"), e(n, "b-targ", "#1b1a29"), e(n, "pc-src", "#28f793"), e(n, "mem-b", "#1b1a29"), e(n, "mem-mem", "#1b1a29"), e(n, "mem-rd", "white"), e(n, "mem-alu", "white")) : t === m.LI ? (e(n, "mem-read", "green"), e(n, "mem-write", "#28f793"), e(n, "branch", "#28f793"), e(n, "mem-zero", "#1b1a29"), e(n, "b-targ", "#1b1a29"), e(n, "pc-src", "#28f793"), e(n, "mem-b", "#1b1a29"), e(n, "mem-mem", "white"), e(n, "mem-rd", "white"), e(n, "mem-alu", "#ede732")) : t === m.S ? (e(n, "mem-read", "#28f793"), e(n, "mem-write", "green"), e(n, "branch", "#28f793"), e(n, "mem-zero", "#1b1a29"), e(n, "b-targ", "#1b1a29"), e(n, "pc-src", "#28f793"), e(n, "mem-b", "#ede732"), e(n, "mem-mem", "#1b1a29"), e(n, "mem-rd", "#1b1a29"), e(n, "mem-alu", "#ede732")) : (e(n, "mem-read", "#28f793"), e(n, "mem-write", "#28f793"), e(n, "branch", "#green"), e(n, "mem-zero", "#ede732"), e(n, "b-targ", "#ede732"), e(n, "pc-src", "green"), e(n, "mem-b", "#1b1a29"), e(n, "mem-mem", "#1b1a29"), e(n, "mem-rd", "#1b1a29"), e(n, "mem-alu", "#1b1a29"));
}
function S() {
  e(n, "mem-read", "#28f793"), e(n, "mem-write", "#28f793"), e(n, "branch", "#28f793"), e(n, "mem-zero", "white"), e(n, "b-targ", "white"), e(n, "pc-src", "#28f793"), e(n, "mem-b", "white"), e(n, "mem-mem", "white"), e(n, "mem-rd", "white"), e(n, "mem-alu", "white");
}
function j(t) {
  t === m.R || t === m.I ? (e(l, "mem-to-reg", "#28f793"), e(l, "reg-write", "green"), e(l, "wb-mem", "#1b1a29"), e(l, "write-data", "slateblue"), e(l, "wb-alu", "slateblue"), e(l, "wb-rd", "slateblue")) : t === m.S || t === m.B ? (e(l, "mem-to-reg", "#28f793"), e(l, "reg-write", "#28f793"), e(l, "wb-mem", "#1b1a29"), e(l, "write-data", "#1b1a29"), e(l, "wb-alu", "#1b1a29"), e(l, "wb-rd", "#1b1a29")) : (e(l, "mem-to-reg", "green"), e(l, "reg-write", "green"), e(l, "wb-mem", "slateblue"), e(l, "write-data", "slateblue"), e(l, "wb-alu", "#1b1a29"), e(l, "wb-rd", "slateblue"));
}
function G() {
  e(l, "mem-to-reg", "#28f793"), e(l, "reg-write", "#28f793"), e(l, "wb-mem", "white"), e(l, "write-data", "white"), e(l, "wb-alu", "white"), e(l, "wb-rd", "white");
}
class J {
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
      R,
      q,
      W,
      $,
      j
    ], this.remove_paints = [
      F,
      D,
      X,
      S,
      G
    ];
    const s = Array.from(document.getElementsByClassName("center-contents-stage-display"));
    this.stage_inst_table = s.filter((r, a) => a % 2 == 1);
  }
  /**
   *    Coloca as instruções a serem simuladas, cehcando também
   * se elas são validas.
   * 
   * @param instructions As linhas das instruções que serão 
   * simuladas.
   */
  setInstructions(s) {
    this.insts = [], s.reverse().forEach((r) => {
      this.insts.push(z(r));
    });
  }
  paint_piped_instructions() {
    this.pipe_occupied.forEach((s, r) => {
      s ? this.paint_funcs[r](this.piped_insts[r].inst_op) : this.remove_paints[r]();
    });
  }
  update_stage_inst_table() {
    this.pipe_occupied.forEach((s, r) => {
      s ? this.stage_inst_table[r].innerHTML = this.piped_insts[r].string_repr : this.stage_inst_table[r].innerHTML = "";
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
      let s = this.pipe_occupied[0], r = this.piped_insts[0];
      this.pipe_occupied[0] = !1;
      for (let a = 1; a < 5; ++a) {
        const c = this.piped_insts[a], d = this.pipe_occupied[a];
        this.piped_insts[a] = r, this.pipe_occupied[a] = s, r = c, s = d;
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
      const s = this.insts.pop();
      this.piped_insts[0] = s, this.insts_on_pipe += 1, this.pipe_occupied[0] = !0;
    }
    return this.paint_piped_instructions(), this.update_stage_inst_table(), !1;
  }
}
function K(t) {
  return Math.floor(Math.random() * t);
}
function P() {
  const t = document.getElementById("inst-select"), s = document.getElementById("reg1-sel"), r = document.getElementById("comma-one"), a = document.getElementById("comma-and-ofsset-1"), c = document.getElementById("comma-and-ofsset-2"), d = document.getElementById("reg2-sel"), y = document.getElementById("comma-two"), p = document.getElementById("shitty-imm"), u = document.getElementById("reg3-sel");
  Array.from(t.children[1].children).forEach((f) => {
    const _ = A.get(f.innerHTML);
    _ === m.R ? f.addEventListener("click", () => {
      s.style.display = "flex", r.style.display = "flex", a.style.display = "none", c.style.display = "none", d.style.display = "flex", y.style.display = "flex", p.style.display = "none", u.style.display = "flex", console.log(`clicked ${f.innerHTML}`), t.children[0].innerHTML = f.innerHTML;
    }) : _ === m.I ? f.addEventListener("click", () => {
      s.style.display = "flex", r.style.display = "flex", a.style.display = "none", c.style.display = "none", d.style.display = "flex", y.style.display = "flex", p.style.display = "flex", u.style.display = "none", document.getElementById("shitty-imm").innerHTML = K(32767).toString(), console.log(`clicked ${f.innerHTML}`), t.children[0].innerHTML = f.innerHTML;
    }) : _ === m.LI || _ === m.S ? f.addEventListener("click", () => {
      s.style.display = "flex", r.style.display = "none", a.style.display = "flex", c.style.display = "flex", d.style.display = "flex", y.style.display = "none", p.style.display = "none", u.style.display = "none", console.log(`clicked ${f.innerHTML}`), t.children[0].innerHTML = f.innerHTML;
    }) : f.addEventListener("click", () => {
      s.style.display = "flex", r.style.display = "flex", a.style.display = "none", c.style.display = "none", d.style.display = "flex", y.style.display = "none", p.style.display = "flex", u.style.display = "none", document.getElementById("shitty-imm").innerHTML = "4", t.children[0].innerHTML = f.innerHTML;
    });
  });
}
function w(t) {
  const s = document.getElementById(t);
  Array.from(s.children[1].children).forEach((r) => {
    r.addEventListener("click", () => {
      s.children[0].innerHTML = r.innerHTML;
    });
  });
}
function Q() {
  const t = document.getElementById("memory-editor");
  document.getElementById("mem-buttom").addEventListener("click", () => {
    t.style.display === "flex" ? t.style.display = "none" : t.style.display = "flex";
  });
}
function U() {
  P(), w("reg1-sel"), w("reg2-sel"), w("reg3-sel");
}
Q();
U();
const V = new J();
document.getElementById("step-buttom").addEventListener("click", () => {
  V.step();
});
