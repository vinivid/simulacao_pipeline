var a = /* @__PURE__ */ ((m) => (m.R = "0110011", m.I = "0010011", m.S = "0100011", m.LI = "0000011", m.B = "1100011", m))(a || {}), h = /* @__PURE__ */ ((m) => (m[m.IF = 0] = "IF", m[m.ID = 1] = "ID", m[m.EX = 2] = "EX", m[m.MEM = 3] = "MEM", m[m.WB = 4] = "WB", m))(h || {});
const _ = /* @__PURE__ */ new Map([
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
]), w = /* @__PURE__ */ new Map([
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
]), u = /* @__PURE__ */ new Map([
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
function C(m) {
  return m.split("").reverse().join("");
}
function B(m) {
  return C((parseInt(m) >> 0).toString(2).padStart(11, "0"));
}
function N(m, n, l, c, b) {
  const d = w.get(m), f = u.get(l), x = u.get(c), o = u.get(b);
  let y;
  return m === "sub" ? y = "00100000" : y = "00000000", y + o + x + d + f + n;
}
function E(m, n, l, c, b) {
  const d = w.get(m), f = u.get(l), x = u.get(c);
  return B(b) + x + d + f + n;
}
function p(m, n, l, c, b) {
  const d = w.get(m), f = u.get(l), x = u.get(c), o = B(b);
  return o.slice(5, 12) + x + f + d + o.slice(0, 5) + n;
}
function A(m, n, l, c, b) {
  const d = w.get(m), f = u.get(l), x = u.get(c), o = B(b);
  return o[9] + o.slice(5, 11) + x + f + d + o.slice(1, 5) + o[10] + n;
}
function I(m, n) {
  return n === a.R ? N(m[0], n, m[1], m[2], m[3]) : n === a.I ? E(m[0], n, m[1], m[2], m[3]) : n === a.LI ? E(m[0], n, m[1], m[3], m[2]) : n === a.S ? p(m[0], n, m[1], m[3], m[2]) : n === a.B ? A(m[0], n, m[1], m[2], m[3]) : "Erro";
}
function M(m) {
  const n = m.trim(), l = n.split(new RegExp(/[,\s()]+/)).filter(Boolean), c = _.get(l[0]), b = h.IF, d = I(l, c);
  return { state: b, binary_repr: d, string_repr: n, inst_op: c };
}
const g = /* @__PURE__ */ new Map([
  ["pcp-4", Array.from(document.getElementsByClassName("pcp-4"))],
  ["pc-to-things", Array.from(document.getElementsByClassName("pc-to-things"))]
]), i = /* @__PURE__ */ new Map([
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
]), t = /* @__PURE__ */ new Map([
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
]), s = /* @__PURE__ */ new Map([
  ["mem-to-reg", Array.from(document.getElementsByClassName("mem-to-reg"))],
  ["reg-write", Array.from(document.getElementsByClassName("reg-write"))],
  ["wb-mem", Array.from(document.getElementsByClassName("wb-mem"))],
  ["write-data", Array.from(document.getElementsByClassName("write-data"))],
  ["wb-alu", Array.from(document.getElementsByClassName("wb-alu"))],
  ["wb-rd", Array.from(document.getElementsByClassName("wb-rd"))]
]);
function e(m, n, l) {
  m.get(n).forEach((c) => c.style.backgroundColor = l);
}
function z() {
  e(g, "pcp-4", "aqua"), e(g, "pc-to-things", "aqua");
}
function v() {
  e(g, "pcp-4", "white"), e(g, "pc-to-things", "white");
}
function R(m) {
  m === a.R ? (e(i, "rs1", "#f58916"), e(i, "rs2", "#f58916"), e(i, "id-imm", "#1b1a29"), e(i, "id-rd", "white"), e(i, "id-pc", "#1b1a29")) : m === a.I || m === a.LI ? (e(i, "rs1", "#f58916"), e(i, "rs2", "#1b1a29"), e(i, "id-imm", "#f58916"), e(i, "id-rd", "white"), e(i, "id-pc", "#1b1a29")) : (m === a.S || m === a.B) && (e(i, "rs1", "#f58916"), e(i, "rs2", "#f58916"), e(i, "id-imm", "#f58916"), e(i, "id-rd", "#1b1a29"), e(i, "id-pc", "#1b1a29"));
}
function F() {
  e(i, "rs1", "white"), e(i, "rs2", "white"), e(i, "id-imm", "white"), e(i, "id-rd", "white"), e(i, "id-pc", "white");
}
function L(m) {
  e(t, "alu-ctrl", "green"), e(t, "ex-inst", "#eb1a21"), m === a.R ? (e(t, "alu-src", "#28f793"), e(t, "ex-pc", "#1b1a29"), e(t, "ex-a", "#eb1a21"), e(t, "ex-zero", "#1b1a29"), e(t, "ex-b", "#eb1a21"), e(t, "ex-imm", "#1b1a29"), e(t, "ex-rd", "white")) : m === a.I || m === a.LI ? (e(t, "alu-src", "green"), e(t, "ex-pc", "#1b1a29"), e(t, "ex-a", "#eb1a21"), e(t, "ex-zero", "#1b1a29"), e(t, "ex-b", "#1b1a29"), e(t, "ex-imm", "#eb1a21"), e(t, "ex-rd", "white")) : m === a.S ? (e(t, "alu-src", "green"), e(t, "ex-pc", "#1b1a29"), e(t, "ex-a", "#eb1a21"), e(t, "ex-zero", "#1b1a29"), e(t, "ex-b", "#1b1a29"), e(t, "ex-imm", "#eb1a21"), e(t, "ex-rd", "#1b1a29")) : (e(t, "alu-src", "green"), e(t, "ex-pc", "#1b1a29"), e(t, "ex-a", "#eb1a21"), e(t, "ex-zero", "white"), e(t, "ex-b", "#1b1a29"), e(t, "ex-imm", "#eb1a21"), e(t, "ex-rd", "#1b1a29"));
}
function D() {
  e(t, "alu-ctrl", "#28f793"), e(t, "ex-inst", "white"), e(t, "alu-src", "#28f793"), e(t, "ex-pc", "white"), e(t, "ex-a", "white"), e(t, "ex-zero", "white"), e(t, "ex-b", "white"), e(t, "ex-imm", "white"), e(t, "ex-rd", "white");
}
function W(m) {
  m === a.R || m === a.I ? (e(r, "mem-read", "#28f793"), e(r, "mem-write", "#28f793"), e(r, "branch", "#28f793"), e(r, "mem-zero", "#1b1a29"), e(r, "b-targ", "#1b1a29"), e(r, "pc-src", "#28f793"), e(r, "mem-b", "#1b1a29"), e(r, "mem-mem", "#1b1a29"), e(r, "mem-rd", "white"), e(r, "mem-alu", "white")) : m === a.LI ? (e(r, "mem-read", "green"), e(r, "mem-write", "#28f793"), e(r, "branch", "#28f793"), e(r, "mem-zero", "#1b1a29"), e(r, "b-targ", "#1b1a29"), e(r, "pc-src", "#28f793"), e(r, "mem-b", "#1b1a29"), e(r, "mem-mem", "white"), e(r, "mem-rd", "white"), e(r, "mem-alu", "#ede732")) : m === a.S ? (e(r, "mem-read", "#28f793"), e(r, "mem-write", "green"), e(r, "branch", "#28f793"), e(r, "mem-zero", "#1b1a29"), e(r, "b-targ", "#1b1a29"), e(r, "pc-src", "#28f793"), e(r, "mem-b", "#ede732"), e(r, "mem-mem", "#1b1a29"), e(r, "mem-rd", "#1b1a29"), e(r, "mem-alu", "#ede732")) : (e(r, "mem-read", "#28f793"), e(r, "mem-write", "#28f793"), e(r, "branch", "#green"), e(r, "mem-zero", "#ede732"), e(r, "b-targ", "#ede732"), e(r, "pc-src", "green"), e(r, "mem-b", "#1b1a29"), e(r, "mem-mem", "#1b1a29"), e(r, "mem-rd", "#1b1a29"), e(r, "mem-alu", "#1b1a29"));
}
function X() {
  e(r, "mem-read", "#28f793"), e(r, "mem-write", "#28f793"), e(r, "branch", "#28f793"), e(r, "mem-zero", "white"), e(r, "b-targ", "white"), e(r, "pc-src", "#28f793"), e(r, "mem-b", "white"), e(r, "mem-mem", "white"), e(r, "mem-rd", "white"), e(r, "mem-alu", "white");
}
function j(m) {
  m === a.R || m === a.I ? (e(s, "mem-to-reg", "#28f793"), e(s, "reg-write", "green"), e(s, "wb-mem", "#1b1a29"), e(s, "write-data", "slateblue"), e(s, "wb-alu", "slateblue"), e(s, "wb-rd", "slateblue")) : m === a.S || m === a.B ? (e(s, "mem-to-reg", "#28f793"), e(s, "reg-write", "#28f793"), e(s, "wb-mem", "#1b1a29"), e(s, "write-data", "#1b1a29"), e(s, "wb-alu", "#1b1a29"), e(s, "wb-rd", "#1b1a29")) : (e(s, "mem-to-reg", "green"), e(s, "reg-write", "green"), e(s, "wb-mem", "slateblue"), e(s, "write-data", "slateblue"), e(s, "wb-alu", "#1b1a29"), e(s, "wb-rd", "slateblue"));
}
function q() {
  e(s, "mem-to-reg", "#28f793"), e(s, "reg-write", "#28f793"), e(s, "wb-mem", "white"), e(s, "write-data", "white"), e(s, "wb-alu", "white"), e(s, "wb-rd", "white");
}
console.log(M("addi x0, x1, 16"));
z();
R(a.B);
L(a.B);
W(a.R);
j(a.LI);
v();
F();
D();
X();
q();
