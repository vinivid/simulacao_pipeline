var N = Object.defineProperty;
var M = (t, n, s) => n in t ? N(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[n] = s;
var _ = (t, n, s) => M(t, typeof n != "symbol" ? n + "" : n, s);
var a = /* @__PURE__ */ ((t) => (t.R = "0110011", t.I = "0010011", t.S = "0100011", t.LI = "0000011", t.B = "1100011", t))(a || {}), C = /* @__PURE__ */ ((t) => (t[t.IF = 0] = "IF", t[t.ID = 1] = "ID", t[t.EX = 2] = "EX", t[t.MEM = 3] = "MEM", t[t.WB = 4] = "WB", t))(C || {});
const w = /* @__PURE__ */ new Map([
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
function A(t) {
  return t.split("").reverse().join("");
}
function B(t) {
  return A((parseInt(t) >> 0).toString(2).padStart(11, "0"));
}
function T(t, n, s, m, l) {
  const c = x.get(t), o = g.get(s), d = g.get(m), f = g.get(l);
  let y;
  return t === "sub" ? y = "00100000" : y = "00000000", y + f + d + c + o + n;
}
function I(t, n, s, m, l) {
  const c = x.get(t), o = g.get(s), d = g.get(m);
  return B(l) + d + c + o + n;
}
function v(t, n, s, m, l) {
  const c = x.get(t), o = g.get(s), d = g.get(m), f = B(l);
  return f.slice(5, 12) + d + o + c + f.slice(0, 5) + n;
}
function H(t, n, s, m, l) {
  const c = x.get(t), o = g.get(s), d = g.get(m), f = B(l);
  return f[9] + f.slice(5, 11) + d + o + c + f.slice(1, 5) + f[10] + n;
}
function z(t, n) {
  return n === a.R ? T(t[0], n, t[1], t[2], t[3]) : n === a.I ? I(t[0], n, t[1], t[2], t[3]) : n === a.LI ? I(t[0], n, t[1], t[3], t[2]) : n === a.S ? v(t[0], n, t[1], t[3], t[2]) : n === a.B ? H(t[0], n, t[1], t[2], t[3]) : "Erro";
}
function $(t) {
  const n = t.trim(), s = n.split(new RegExp(/[,\s()]+/)).filter(Boolean), m = w.get(s[0]), l = C.IF, c = z(s, m);
  return { state: l, binary_repr: c, string_repr: n, inst_op: m };
}
const h = /* @__PURE__ */ new Map([
  ["pcp-4", Array.from(document.getElementsByClassName("pcp-4"))],
  ["pc-to-things", Array.from(document.getElementsByClassName("pc-to-things"))]
]), p = /* @__PURE__ */ new Map([
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
]), r = /* @__PURE__ */ new Map([
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
]), u = /* @__PURE__ */ new Map([
  ["mem-to-reg", Array.from(document.getElementsByClassName("mem-to-reg"))],
  ["reg-write", Array.from(document.getElementsByClassName("reg-write"))],
  ["wb-mem", Array.from(document.getElementsByClassName("wb-mem"))],
  ["write-data", Array.from(document.getElementsByClassName("write-data"))],
  ["wb-alu", Array.from(document.getElementsByClassName("wb-alu"))],
  ["wb-rd", Array.from(document.getElementsByClassName("wb-rd"))]
]);
function e(t, n, s) {
  t.get(n).forEach((m) => m.style.backgroundColor = s);
}
function R(t) {
  e(h, "pcp-4", "aqua"), e(h, "pc-to-things", "aqua");
}
function F() {
  e(h, "pcp-4", "white"), e(h, "pc-to-things", "white");
}
function q(t) {
  t === a.R ? (e(p, "rs1", "#f58916"), e(p, "rs2", "#f58916"), e(p, "id-imm", "#1b1a29"), e(p, "id-rd", "white"), e(p, "id-pc", "#1b1a29")) : t === a.I || t === a.LI ? (e(p, "rs1", "#f58916"), e(p, "rs2", "#1b1a29"), e(p, "id-imm", "#f58916"), e(p, "id-rd", "white"), e(p, "id-pc", "#1b1a29")) : (t === a.S || t === a.B) && (e(p, "rs1", "#f58916"), e(p, "rs2", "#f58916"), e(p, "id-imm", "#f58916"), e(p, "id-rd", "#1b1a29"), e(p, "id-pc", "#1b1a29"));
}
function D() {
  e(p, "rs1", "white"), e(p, "rs2", "white"), e(p, "id-imm", "white"), e(p, "id-rd", "white"), e(p, "id-pc", "white");
}
function S(t) {
  e(i, "alu-ctrl", "green"), e(i, "ex-inst", "#eb1a21"), t === a.R ? (e(i, "alu-src", "#28f793"), e(i, "ex-pc", "#1b1a29"), e(i, "ex-a", "#eb1a21"), e(i, "ex-zero", "#1b1a29"), e(i, "ex-b", "#eb1a21"), e(i, "ex-imm", "#1b1a29"), e(i, "ex-rd", "white")) : t === a.I || t === a.LI ? (e(i, "alu-src", "green"), e(i, "ex-pc", "#1b1a29"), e(i, "ex-a", "#eb1a21"), e(i, "ex-zero", "#1b1a29"), e(i, "ex-b", "#1b1a29"), e(i, "ex-imm", "#eb1a21"), e(i, "ex-rd", "white")) : t === a.S ? (e(i, "alu-src", "green"), e(i, "ex-pc", "#1b1a29"), e(i, "ex-a", "#eb1a21"), e(i, "ex-zero", "#1b1a29"), e(i, "ex-b", "#1b1a29"), e(i, "ex-imm", "#eb1a21"), e(i, "ex-rd", "#1b1a29")) : (e(i, "alu-src", "green"), e(i, "ex-pc", "#1b1a29"), e(i, "ex-a", "#eb1a21"), e(i, "ex-zero", "white"), e(i, "ex-b", "#1b1a29"), e(i, "ex-imm", "#eb1a21"), e(i, "ex-rd", "#1b1a29"));
}
function W() {
  e(i, "alu-ctrl", "#28f793"), e(i, "ex-inst", "white"), e(i, "alu-src", "#28f793"), e(i, "ex-pc", "white"), e(i, "ex-a", "white"), e(i, "ex-zero", "white"), e(i, "ex-b", "white"), e(i, "ex-imm", "white"), e(i, "ex-rd", "white");
}
function X(t) {
  t === a.R || t === a.I ? (e(r, "mem-read", "#28f793"), e(r, "mem-write", "#28f793"), e(r, "branch", "#28f793"), e(r, "mem-zero", "#1b1a29"), e(r, "b-targ", "#1b1a29"), e(r, "pc-src", "#28f793"), e(r, "mem-b", "#1b1a29"), e(r, "mem-mem", "#1b1a29"), e(r, "mem-rd", "white"), e(r, "mem-alu", "white")) : t === a.LI ? (e(r, "mem-read", "green"), e(r, "mem-write", "#28f793"), e(r, "branch", "#28f793"), e(r, "mem-zero", "#1b1a29"), e(r, "b-targ", "#1b1a29"), e(r, "pc-src", "#28f793"), e(r, "mem-b", "#1b1a29"), e(r, "mem-mem", "white"), e(r, "mem-rd", "white"), e(r, "mem-alu", "#ede732")) : t === a.S ? (e(r, "mem-read", "#28f793"), e(r, "mem-write", "green"), e(r, "branch", "#28f793"), e(r, "mem-zero", "#1b1a29"), e(r, "b-targ", "#1b1a29"), e(r, "pc-src", "#28f793"), e(r, "mem-b", "#ede732"), e(r, "mem-mem", "#1b1a29"), e(r, "mem-rd", "#1b1a29"), e(r, "mem-alu", "#ede732")) : (e(r, "mem-read", "#28f793"), e(r, "mem-write", "#28f793"), e(r, "branch", "#green"), e(r, "mem-zero", "#ede732"), e(r, "b-targ", "#ede732"), e(r, "pc-src", "green"), e(r, "mem-b", "#1b1a29"), e(r, "mem-mem", "#1b1a29"), e(r, "mem-rd", "#1b1a29"), e(r, "mem-alu", "#1b1a29"));
}
function j() {
  e(r, "mem-read", "#28f793"), e(r, "mem-write", "#28f793"), e(r, "branch", "#28f793"), e(r, "mem-zero", "white"), e(r, "b-targ", "white"), e(r, "pc-src", "#28f793"), e(r, "mem-b", "white"), e(r, "mem-mem", "white"), e(r, "mem-rd", "white"), e(r, "mem-alu", "white");
}
function G(t) {
  t === a.R || t === a.I ? (e(u, "mem-to-reg", "#28f793"), e(u, "reg-write", "green"), e(u, "wb-mem", "#1b1a29"), e(u, "write-data", "slateblue"), e(u, "wb-alu", "slateblue"), e(u, "wb-rd", "slateblue")) : t === a.S || t === a.B ? (e(u, "mem-to-reg", "#28f793"), e(u, "reg-write", "#28f793"), e(u, "wb-mem", "#1b1a29"), e(u, "write-data", "#1b1a29"), e(u, "wb-alu", "#1b1a29"), e(u, "wb-rd", "#1b1a29")) : (e(u, "mem-to-reg", "green"), e(u, "reg-write", "green"), e(u, "wb-mem", "slateblue"), e(u, "write-data", "slateblue"), e(u, "wb-alu", "#1b1a29"), e(u, "wb-rd", "slateblue"));
}
function J() {
  e(u, "mem-to-reg", "#28f793"), e(u, "reg-write", "#28f793"), e(u, "wb-mem", "white"), e(u, "write-data", "white"), e(u, "wb-alu", "white"), e(u, "wb-rd", "white");
}
class K {
  constructor() {
    /* São as instruções todas as instruções colocadas para
    simular */
    _(this, "insts");
    /* Piped inst é um array que representa qual instrução
    esta em um determinado estagio do pipeline.
       A posição 0 é o IF, 1 = ID, 2 = EX, 3 = MEM,
    4 = WB. Para saber se um estado possui ou não instrução
    é necessario verificar o array pipe_occupied, que guarda se
    uma posição esta ocupada ou não */
    _(this, "piped_insts");
    _(this, "pipe_occupied");
    _(this, "insts_on_pipe");
    //Quantidade de instruções que estão no pipe
    _(this, "paint_funcs");
    _(this, "remove_paints");
    _(this, "stage_inst_table");
    this.insts = [], this.piped_insts = [], this.pipe_occupied = [!1, !1, !1, !1, !1], this.insts_on_pipe = 0, this.paint_funcs = [
      R,
      q,
      S,
      X,
      G
    ], this.remove_paints = [
      F,
      D,
      W,
      j,
      J
    ];
    const n = Array.from(document.getElementsByClassName("center-contents-stage-display"));
    this.stage_inst_table = n.filter((s, m) => m % 2 == 1);
  }
  /**
   *    Coloca as instruções a serem simuladas, cehcando também
   * se elas são validas.
   * 
   * @param instructions As linhas das instruções que serão 
   * simuladas.
   */
  setInstructions(n) {
    this.insts = [], n.reverse().forEach((s) => {
      this.insts.push($(s));
    });
  }
  paint_piped_instructions() {
    this.pipe_occupied.forEach((n, s) => {
      n ? this.paint_funcs[s](this.piped_insts[s].inst_op) : this.remove_paints[s]();
    });
  }
  update_stage_inst_table() {
    this.pipe_occupied.forEach((n, s) => {
      n ? this.stage_inst_table[s].innerHTML = this.piped_insts[s].string_repr : this.stage_inst_table[s].innerHTML = "";
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
      let n = this.pipe_occupied[0], s = this.piped_insts[0];
      this.pipe_occupied[0] = !1;
      for (let m = 1; m < 5; ++m) {
        const l = this.piped_insts[m], c = this.pipe_occupied[m];
        this.piped_insts[m] = s, this.pipe_occupied[m] = n, s = l, n = c;
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
      const n = this.insts.pop();
      this.piped_insts[0] = n, this.insts_on_pipe += 1, this.pipe_occupied[0] = !0;
    }
    return this.paint_piped_instructions(), this.update_stage_inst_table(), !1;
  }
}
function P(t) {
  return Math.floor(Math.random() * t);
}
function Q() {
  const t = document.getElementById("inst-select"), n = document.getElementById("reg1-sel"), s = document.getElementById("comma-one"), m = document.getElementById("comma-and-ofsset-1"), l = document.getElementById("comma-and-ofsset-2"), c = document.getElementById("reg2-sel"), o = document.getElementById("comma-two"), d = document.getElementById("shitty-imm"), f = document.getElementById("reg3-sel");
  Array.from(t.children[1].children).forEach((y) => {
    const b = w.get(y.innerHTML);
    b === a.R ? y.addEventListener("click", () => {
      n.style.display = "flex", s.style.display = "flex", m.style.display = "none", l.style.display = "none", c.style.display = "flex", o.style.display = "flex", d.style.display = "none", f.style.display = "flex", t.children[0].innerHTML = y.innerHTML;
    }) : b === a.I ? y.addEventListener("click", () => {
      n.style.display = "flex", s.style.display = "flex", m.style.display = "none", l.style.display = "none", c.style.display = "flex", o.style.display = "flex", d.style.display = "flex", f.style.display = "none", document.getElementById("shitty-imm").innerHTML = P(32767).toString(), t.children[0].innerHTML = y.innerHTML;
    }) : b === a.LI || b === a.S ? y.addEventListener("click", () => {
      n.style.display = "flex", s.style.display = "none", m.style.display = "flex", l.style.display = "flex", c.style.display = "flex", o.style.display = "none", d.style.display = "none", f.style.display = "none", t.children[0].innerHTML = y.innerHTML;
    }) : y.addEventListener("click", () => {
      n.style.display = "flex", s.style.display = "flex", m.style.display = "none", l.style.display = "none", c.style.display = "flex", o.style.display = "flex", d.style.display = "flex", f.style.display = "none", document.getElementById("shitty-imm").innerHTML = "4", t.children[0].innerHTML = y.innerHTML;
    });
  });
}
function E(t) {
  const n = document.getElementById(t);
  Array.from(n.children[1].children).forEach((s) => {
    s.addEventListener("click", () => {
      n.children[0].innerHTML = s.innerHTML;
    });
  });
}
function U() {
  const t = document.getElementById("add-inst"), n = document.getElementById("insts-added");
  t.addEventListener("click", () => {
    const s = document.getElementById("inst-select").children[0].innerHTML;
    if (s !== "") {
      const m = w.get(s);
      if (console.log(s), m === a.R) {
        const l = document.getElementById("reg1-sel").children[0].innerHTML, c = document.getElementById("reg2-sel").children[0].innerHTML, o = document.getElementById("reg3-sel").children[0].innerHTML;
        if (l !== "" && c !== "" && o !== "") {
          const d = document.createElement("p"), f = document.createTextNode(`${s} ${l}, ${c}, ${o}`);
          d.appendChild(f), d.classList.add("center-contents"), n.appendChild(d);
        }
      } else if (m === a.I) {
        const l = document.getElementById("reg1-sel").children[0].innerHTML, c = document.getElementById("reg2-sel").children[0].innerHTML, o = document.getElementById("shitty-imm").innerHTML;
        if (l !== "" && c !== "") {
          const d = document.createElement("p"), f = document.createTextNode(`${s} ${l}, ${c}, ${o}`);
          d.appendChild(f), d.classList.add("center-contents"), n.appendChild(d);
        }
      } else if (m === a.LI || m === a.S) {
        const l = document.getElementById("reg1-sel").children[0].innerHTML, c = document.getElementById("reg2-sel").children[0].innerHTML;
        if (l !== "" && c !== "") {
          const o = document.createElement("p"), d = document.createTextNode(`${s} ${l}, 4(${c})`);
          o.appendChild(d), o.classList.add("center-contents"), n.appendChild(o);
        }
      } else {
        const l = document.getElementById("reg1-sel").children[0].innerHTML, c = document.getElementById("reg2-sel").children[0].innerHTML;
        if (l !== "" && c !== "") {
          const o = document.createElement("p"), d = document.createTextNode(`${s} ${l}, ${c}, 4`);
          o.appendChild(d), o.classList.add("center-contents"), n.appendChild(o);
        }
      }
    }
  });
}
function V(t) {
  const n = document.getElementById("sim-button"), s = document.getElementById("insts-added");
  n.addEventListener("click", () => {
    const m = [];
    Array.from(s.children).forEach((l) => m.push(l.innerHTML)), console.log(m), t.setInstructions(m);
  });
}
function Y() {
  const t = document.getElementById("reset-inst"), n = document.getElementById("insts-added");
  t.addEventListener("click", () => {
    Array.from(n.children).forEach((s) => s.remove());
  });
}
function Z() {
  Q(), E("reg1-sel"), E("reg2-sel"), E("reg3-sel");
}
function O() {
  const t = document.getElementById("memory-editor");
  document.getElementById("mem-button").addEventListener("click", () => {
    t.style.display === "flex" ? t.style.display = "none" : t.style.display = "flex";
  });
}
O();
Z();
U();
Y();
const L = new K();
V(L);
document.getElementById("step-button").addEventListener("click", () => {
  L.step();
});
