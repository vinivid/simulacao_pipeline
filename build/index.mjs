var A = Object.defineProperty;
var M = (t, n, s) => n in t ? A(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[n] = s;
var g = (t, n, s) => M(t, typeof n != "symbol" ? n + "" : n, s);
const h = /* @__PURE__ */ new Map([
  ["pcp-4", Array.from(document.getElementsByClassName("pcp-4"))],
  ["pc-to-things", Array.from(document.getElementsByClassName("pc-to-things"))],
  ["inst-mem-to-pipe", Array.from(document.getElementsByClassName("inst-mem-to-pipe"))]
]), o = /* @__PURE__ */ new Map([
  ["rs1", Array.from(document.getElementsByClassName("rs1"))],
  ["id-a", Array.from(document.getElementsByClassName("id-a"))],
  ["rs2", Array.from(document.getElementsByClassName("rs2"))],
  ["id-b", Array.from(document.getElementsByClassName("id-b"))],
  ["id-imm-b", Array.from(document.getElementsByClassName("id-imm-b"))],
  ["id-imm-a", Array.from(document.getElementsByClassName("id-imm-a"))],
  ["id-inst", Array.from(document.getElementsByClassName("id-inst"))],
  ["id-rd", Array.from(document.getElementsByClassName("id-rd"))],
  ["id-wb", Array.from(document.getElementsByClassName("id-wb"))],
  ["id-m", Array.from(document.getElementsByClassName("id-m"))],
  ["id-ex", Array.from(document.getElementsByClassName("id-ex"))],
  ["id-pc", Array.from(document.getElementsByClassName("id-pc"))],
  ["inst-shower", Array.from(document.getElementsByClassName("inst-shower"))]
]), r = /* @__PURE__ */ new Map([
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
]), i = /* @__PURE__ */ new Map([
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
var l = /* @__PURE__ */ ((t) => (t.R = "0110011", t.I = "0010011", t.S = "0100011", t.LI = "0000011", t.B = "1100011", t))(l || {}), L = /* @__PURE__ */ ((t) => (t[t.IF = 0] = "IF", t[t.ID = 1] = "ID", t[t.EX = 2] = "EX", t[t.MEM = 3] = "MEM", t[t.WB = 4] = "WB", t))(L || {});
const B = /* @__PURE__ */ new Map([
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
]), b = /* @__PURE__ */ new Map([
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
function v(t) {
  return t.split("").reverse().join("");
}
function I(t) {
  return v((parseInt(t) >> 0).toString(2).padStart(11, "0"));
}
function T(t, n, s, m, a) {
  const d = x.get(t), c = b.get(s), f = b.get(m), p = b.get(a);
  let y;
  return t === "sub" ? y = "00100000" : y = "00000000", y + p + f + d + c + n;
}
function C(t, n, s, m, a) {
  const d = x.get(t), c = b.get(s), f = b.get(m);
  return I(a) + f + d + c + n;
}
function H(t, n, s, m, a) {
  const d = x.get(t), c = b.get(s), f = b.get(m), p = I(a);
  return p.slice(5, 12) + f + c + d + p.slice(0, 5) + n;
}
function $(t, n, s, m, a) {
  const d = x.get(t), c = b.get(s), f = b.get(m), p = I(a);
  return p[9] + p.slice(5, 11) + f + c + d + p.slice(1, 5) + p[10] + n;
}
function e(t, n, s) {
  t.get(n).forEach((m) => m.style.backgroundColor = s);
}
function z(t) {
  e(h, "pcp-4", "aqua"), e(h, "pc-to-things", "aqua");
}
function R() {
  e(h, "pcp-4", "white"), e(h, "pc-to-things", "white");
}
function F(t) {
  t === l.R ? (e(o, "rs1", "#f58916"), e(o, "rs2", "#f58916"), e(o, "id-a", "#f58916"), e(o, "id-b", "#f58916"), e(o, "id-imm-b", "#1b1a29"), e(o, "id-imm-a", "#1b1a29"), e(o, "id-rd", "white"), e(o, "id-pc", "#1b1a29")) : t === l.I || t === l.LI ? (e(o, "rs1", "#f58916"), e(o, "rs2", "#1b1a29"), e(o, "id-a", "#f58916"), e(o, "id-b", "#1b1a29"), e(o, "id-imm-b", "#f58916"), e(o, "id-imm-a", "#f58916"), e(o, "id-rd", "white"), e(o, "id-pc", "#1b1a29")) : (t === l.S || t === l.B) && (e(o, "rs1", "#f58916"), e(o, "rs2", "#f58916"), e(o, "id-a", "#f58916"), e(o, "id-b", "#f58916"), e(o, "id-imm-b", "#f58916"), e(o, "id-imm-a", "#f58916"), e(o, "id-rd", "#1b1a29"), e(o, "id-pc", "#1b1a29"));
}
function X() {
  e(o, "rs1", "white"), e(o, "rs2", "white"), e(o, "id-a", "white"), e(o, "id-b", "white"), e(o, "id-imm-b", "white"), e(o, "id-imm-a", "white"), e(o, "id-rd", "white"), e(o, "id-pc", "white");
}
function W(t) {
  e(r, "alu-ctrl", "green"), e(r, "ex-inst", "#eb1a21"), t === l.R ? (e(r, "alu-src", "#28f793"), e(r, "ex-pc", "#1b1a29"), e(r, "ex-a", "#eb1a21"), e(r, "ex-zero", "#1b1a29"), e(r, "ex-b", "#eb1a21"), e(r, "ex-imm", "#1b1a29"), e(r, "ex-rd", "white")) : t === l.I || t === l.LI ? (e(r, "alu-src", "green"), e(r, "ex-pc", "#1b1a29"), e(r, "ex-a", "#eb1a21"), e(r, "ex-zero", "#1b1a29"), e(r, "ex-b", "#1b1a29"), e(r, "ex-imm", "#eb1a21"), e(r, "ex-rd", "white")) : t === l.S ? (e(r, "alu-src", "green"), e(r, "ex-pc", "#1b1a29"), e(r, "ex-a", "#eb1a21"), e(r, "ex-zero", "#1b1a29"), e(r, "ex-b", "#1b1a29"), e(r, "ex-imm", "#eb1a21"), e(r, "ex-rd", "#1b1a29")) : (e(r, "alu-src", "green"), e(r, "ex-pc", "#1b1a29"), e(r, "ex-a", "#eb1a21"), e(r, "ex-zero", "white"), e(r, "ex-b", "#1b1a29"), e(r, "ex-imm", "#eb1a21"), e(r, "ex-rd", "#1b1a29"));
}
function q() {
  e(r, "alu-ctrl", "#28f793"), e(r, "ex-inst", "white"), e(r, "alu-src", "#28f793"), e(r, "ex-pc", "white"), e(r, "ex-a", "white"), e(r, "ex-zero", "white"), e(r, "ex-b", "white"), e(r, "ex-imm", "white"), e(r, "ex-rd", "white");
}
function D(t) {
  t === l.R || t === l.I ? (e(i, "mem-read", "#28f793"), e(i, "mem-write", "#28f793"), e(i, "branch", "#28f793"), e(i, "mem-zero", "#1b1a29"), e(i, "b-targ", "#1b1a29"), e(i, "pc-src", "#28f793"), e(i, "mem-b", "#1b1a29"), e(i, "mem-mem", "#1b1a29"), e(i, "mem-rd", "white"), e(i, "mem-alu", "white")) : t === l.LI ? (e(i, "mem-read", "green"), e(i, "mem-write", "#28f793"), e(i, "branch", "#28f793"), e(i, "mem-zero", "#1b1a29"), e(i, "b-targ", "#1b1a29"), e(i, "pc-src", "#28f793"), e(i, "mem-b", "#1b1a29"), e(i, "mem-mem", "white"), e(i, "mem-rd", "white"), e(i, "mem-alu", "#ede732")) : t === l.S ? (e(i, "mem-read", "#28f793"), e(i, "mem-write", "green"), e(i, "branch", "#28f793"), e(i, "mem-zero", "#1b1a29"), e(i, "b-targ", "#1b1a29"), e(i, "pc-src", "#28f793"), e(i, "mem-b", "#ede732"), e(i, "mem-mem", "#1b1a29"), e(i, "mem-rd", "#1b1a29"), e(i, "mem-alu", "#ede732")) : (e(i, "mem-read", "#28f793"), e(i, "mem-write", "#28f793"), e(i, "branch", "#green"), e(i, "mem-zero", "#ede732"), e(i, "b-targ", "#ede732"), e(i, "pc-src", "green"), e(i, "mem-b", "#1b1a29"), e(i, "mem-mem", "#1b1a29"), e(i, "mem-rd", "#1b1a29"), e(i, "mem-alu", "#1b1a29"));
}
function S() {
  e(i, "mem-read", "#28f793"), e(i, "mem-write", "#28f793"), e(i, "branch", "#28f793"), e(i, "mem-zero", "white"), e(i, "b-targ", "white"), e(i, "pc-src", "#28f793"), e(i, "mem-b", "white"), e(i, "mem-mem", "white"), e(i, "mem-rd", "white"), e(i, "mem-alu", "white");
}
function Y(t) {
  t === l.R || t === l.I ? (e(u, "mem-to-reg", "#28f793"), e(u, "reg-write", "green"), e(u, "wb-mem", "#1b1a29"), e(u, "write-data", "slateblue"), e(u, "wb-alu", "slateblue"), e(u, "wb-rd", "slateblue")) : t === l.S || t === l.B ? (e(u, "mem-to-reg", "#28f793"), e(u, "reg-write", "#28f793"), e(u, "wb-mem", "#1b1a29"), e(u, "write-data", "#1b1a29"), e(u, "wb-alu", "#1b1a29"), e(u, "wb-rd", "#1b1a29")) : (e(u, "mem-to-reg", "green"), e(u, "reg-write", "green"), e(u, "wb-mem", "slateblue"), e(u, "write-data", "slateblue"), e(u, "wb-alu", "#1b1a29"), e(u, "wb-rd", "slateblue"));
}
function j() {
  e(u, "mem-to-reg", "#28f793"), e(u, "reg-write", "#28f793"), e(u, "wb-mem", "white"), e(u, "write-data", "white"), e(u, "wb-alu", "white"), e(u, "wb-rd", "white");
}
function _(t, n) {
  t.addEventListener("mouseenter", () => {
    n.style.display = "flex", n.style.pointerEvents = "auto", requestAnimationFrame(() => {
      n.style.opacity = "1";
    });
  }), t.addEventListener("mousemove", (s) => {
    const m = document.documentElement.scrollWidth, a = document.documentElement.scrollHeight;
    s.pageY > 4 / 5 * a ? (n.style.top = "auto", n.style.bottom = a - s.pageY + 10 + "px") : (n.style.bottom = "auto", n.style.top = s.pageY + 30 + "px"), s.pageX > 4 / 5 * m ? (n.style.left = "auto", n.style.right = m - s.pageX + 30 + "px") : (n.style.right = "auto", n.style.left = s.pageX + 30 + "px");
  }), t.addEventListener("mouseleave", () => {
    n.style.opacity = "0", setTimeout(() => {
      n.style.display = "none", n.style.pointerEvents = "none";
    }, 300);
  });
}
function G() {
  h.forEach((t, n) => {
    t.forEach((s) => {
      _(s, document.getElementById(`${n}-exp`));
    });
  }), o.forEach((t, n) => {
    t.forEach((s) => {
      _(s, document.getElementById(`${n}-exp`));
    });
  }), r.forEach((t, n) => {
    t.forEach((s) => {
      _(s, document.getElementById(`${n}-exp`));
    });
  }), i.forEach((t, n) => {
    t.forEach((s) => {
      _(s, document.getElementById(`${n}-exp`));
    });
  }), u.forEach((t, n) => {
    t.forEach((s) => {
      _(s, document.getElementById(`${n}-exp`));
    });
  });
}
function J(t, n) {
  return n === l.R ? T(t[0], n, t[1], t[2], t[3]) : n === l.I ? C(t[0], n, t[1], t[2], t[3]) : n === l.LI ? C(t[0], n, t[1], t[3], t[2]) : n === l.S ? H(t[0], n, t[1], t[3], t[2]) : n === l.B ? $(t[0], n, t[1], t[2], t[3]) : "Erro";
}
function K(t) {
  const n = t.trim(), s = n.split(new RegExp(/[,\s()]+/)).filter(Boolean), m = B.get(s[0]), a = L.IF, d = J(s, m);
  return { state: a, binary_repr: d, string_repr: n, inst_op: m };
}
class P {
  constructor() {
    /* São as instruções todas as instruções colocadas para
    simular */
    g(this, "insts");
    /* Piped inst é um array que representa qual instrução
    esta em um determinado estagio do pipeline.
       A posição 0 é o IF, 1 = ID, 2 = EX, 3 = MEM,
    4 = WB. Para saber se um estado possui ou não instrução
    é necessario verificar o array pipe_occupied, que guarda se
    uma posição esta ocupada ou não */
    g(this, "piped_insts");
    g(this, "pipe_occupied");
    g(this, "insts_on_pipe");
    //Quantidade de instruções que estão no pipe
    g(this, "paint_funcs");
    g(this, "remove_paints");
    g(this, "stage_inst_table");
    g(this, "pc_pos");
    this.insts = [], this.piped_insts = [], this.pipe_occupied = [!1, !1, !1, !1, !1], this.insts_on_pipe = 0, this.pc_pos = 0, this.paint_funcs = [
      z,
      F,
      W,
      D,
      Y
    ], this.remove_paints = [
      R,
      X,
      q,
      S,
      j
    ];
    const n = Array.from(document.getElementsByClassName("stage-display"));
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
      this.insts.push(K(s));
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
        const a = this.piped_insts[m], d = this.pipe_occupied[m];
        this.piped_insts[m] = s, this.pipe_occupied[m] = n, s = a, n = d;
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
    return this.paint_piped_instructions(), this.update_stage_inst_table(), this.pc_pos += 4, !1;
  }
}
function Q(t, n) {
  return t = Math.ceil(t), n = Math.floor(n), Math.floor(Math.random() * (n - t + 1)) + t;
}
function U() {
  const t = document.getElementById("inst-select"), n = document.getElementById("reg1-sel"), s = document.getElementById("comma-one"), m = document.getElementById("comma-and-ofsset-1"), a = document.getElementById("comma-and-ofsset-2"), d = document.getElementById("reg2-sel"), c = document.getElementById("comma-two"), f = document.getElementById("shitty-imm"), p = document.getElementById("reg3-sel");
  Array.from(t.children[1].children).forEach((y) => {
    const E = B.get(y.innerHTML);
    E === l.R ? y.addEventListener("click", () => {
      n.style.display = "flex", s.style.display = "flex", m.style.display = "none", a.style.display = "none", d.style.display = "flex", c.style.display = "flex", f.style.display = "none", p.style.display = "flex", t.children[0].innerHTML = y.innerHTML;
    }) : E === l.I ? y.addEventListener("click", () => {
      n.style.display = "flex", s.style.display = "flex", m.style.display = "none", a.style.display = "none", d.style.display = "flex", c.style.display = "flex", f.style.display = "flex", p.style.display = "none", document.getElementById("shitty-imm").innerHTML = Q(-1024, 1024).toString(), t.children[0].innerHTML = y.innerHTML;
    }) : E === l.LI || E === l.S ? y.addEventListener("click", () => {
      n.style.display = "flex", s.style.display = "none", m.style.display = "flex", a.style.display = "flex", d.style.display = "flex", c.style.display = "none", f.style.display = "none", p.style.display = "none", t.children[0].innerHTML = y.innerHTML;
    }) : y.addEventListener("click", () => {
      n.style.display = "flex", s.style.display = "flex", m.style.display = "none", a.style.display = "none", d.style.display = "flex", c.style.display = "flex", f.style.display = "flex", p.style.display = "none", document.getElementById("shitty-imm").innerHTML = "4", t.children[0].innerHTML = y.innerHTML;
    });
  });
}
function w(t) {
  const n = document.getElementById(t);
  Array.from(n.children[1].children).forEach((s) => {
    s.addEventListener("click", () => {
      n.children[0].innerHTML = s.innerHTML;
    });
  });
}
function V() {
  const t = document.getElementById("add-inst"), n = document.getElementById("insts-added");
  t.addEventListener("click", () => {
    const s = document.getElementById("inst-select").children[0].innerHTML;
    if (s !== "") {
      const m = B.get(s);
      if (m === l.R) {
        const a = document.getElementById("reg1-sel").children[0].innerHTML, d = document.getElementById("reg2-sel").children[0].innerHTML, c = document.getElementById("reg3-sel").children[0].innerHTML;
        if (a !== "" && d !== "" && c !== "") {
          const f = document.createElement("p"), p = document.createTextNode(`${s} ${a}, ${d}, ${c}`);
          f.appendChild(p), f.classList.add("center-contents"), n.appendChild(f);
        }
      } else if (m === l.I) {
        const a = document.getElementById("reg1-sel").children[0].innerHTML, d = document.getElementById("reg2-sel").children[0].innerHTML, c = document.getElementById("shitty-imm").innerHTML;
        if (a !== "" && d !== "") {
          const f = document.createElement("p"), p = document.createTextNode(`${s} ${a}, ${d}, ${c}`);
          f.appendChild(p), f.classList.add("center-contents"), n.appendChild(f);
        }
      } else if (m === l.LI || m === l.S) {
        const a = document.getElementById("reg1-sel").children[0].innerHTML, d = document.getElementById("reg2-sel").children[0].innerHTML;
        if (a !== "" && d !== "") {
          const c = document.createElement("p"), f = document.createTextNode(`${s} ${a}, 4(${d})`);
          c.appendChild(f), c.classList.add("center-contents"), n.appendChild(c);
        }
      } else {
        const a = document.getElementById("reg1-sel").children[0].innerHTML, d = document.getElementById("reg2-sel").children[0].innerHTML;
        if (a !== "" && d !== "") {
          const c = document.createElement("p"), f = document.createTextNode(`${s} ${a}, ${d}, 4`);
          c.appendChild(f), c.classList.add("center-contents"), n.appendChild(c);
        }
      }
    }
  });
}
function Z(t) {
  const n = document.getElementById("sim-button"), s = document.getElementById("insts-added");
  n.addEventListener("click", () => {
    const m = [];
    Array.from(s.children).forEach((a) => m.push(a.innerHTML)), t.setInstructions(m);
  });
}
function O() {
  const t = document.getElementById("reset-inst"), n = document.getElementById("insts-added");
  t.addEventListener("click", () => {
    Array.from(n.children).forEach((s) => s.remove());
  });
}
function k() {
  U(), w("reg1-sel"), w("reg2-sel"), w("reg3-sel");
}
function ee() {
  const t = document.getElementById("memory-editor");
  document.getElementById("mem-button").addEventListener("click", () => {
    t.style.display === "flex" ? t.style.display = "none" : t.style.display = "flex";
  });
}
ee();
k();
V();
O();
G();
const N = new P();
Z(N);
h.get("pc-to-things");
document.getElementById("pc-to-things-exp");
document.getElementById("step-button").addEventListener("click", () => {
  N.step();
});
