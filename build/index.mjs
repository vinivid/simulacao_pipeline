var i = /* @__PURE__ */ ((e) => (e.R = "0110011", e.I = "0010011", e.S = "0100011", e.LI = "0000011", e.B = "1100011", e))(i || {}), x = /* @__PURE__ */ ((e) => (e[e.IF = 0] = "IF", e[e.ID = 1] = "ID", e[e.EX = 2] = "EX", e[e.MEM = 3] = "MEM", e[e.WB = 4] = "WB", e))(x || {});
const E = /* @__PURE__ */ new Map([
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
]), u = /* @__PURE__ */ new Map([
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
]), o = /* @__PURE__ */ new Map([
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
function b(e) {
  return e.split("").reverse().join("");
}
function g(e) {
  return b((parseInt(e) >> 0).toString(2).padStart(11, "0"));
}
function B(e, r, m, t, n) {
  const a = u.get(e), l = o.get(m), c = o.get(t), s = o.get(n);
  let d;
  return e === "sub" ? d = "00100000" : d = "00000000", d + s + c + a + l + r;
}
function y(e, r, m, t, n) {
  const a = u.get(e), l = o.get(m), c = o.get(t);
  return g(n) + c + a + l + r;
}
function C(e, r, m, t, n) {
  const a = u.get(e), l = o.get(m), c = o.get(t), s = g(n);
  return s.slice(5, 12) + c + l + a + s.slice(0, 5) + r;
}
function N(e, r, m, t, n) {
  const a = u.get(e), l = o.get(m), c = o.get(t), s = g(n);
  return s[9] + s.slice(5, 11) + c + l + a + s.slice(1, 5) + s[10] + r;
}
function A(e, r) {
  return r === i.R ? B(e[0], r, e[1], e[2], e[3]) : r === i.I ? y(e[0], r, e[1], e[2], e[3]) : r === i.LI ? y(e[0], r, e[1], e[3], e[2]) : r === i.S ? C(e[0], r, e[1], e[3], e[2]) : r === i.B ? N(e[0], r, e[1], e[2], e[3]) : "Erro";
}
function _(e) {
  const r = e.trim(), m = r.split(new RegExp(/[,\s()]+/)).filter(Boolean), t = E.get(m[0]), n = x.IF, a = A(m, t);
  return { state: n, binary_repr: a, string_repr: r, inst_op: t };
}
const f = /* @__PURE__ */ new Map([
  ["pcp-4", Array.from(document.getElementsByClassName("pcp-4"))],
  ["pc-to-things", Array.from(document.getElementsByClassName("pc-to-things"))]
]);
Array.from(document.getElementsByClassName("rs1")), Array.from(document.getElementsByClassName("rs2")), Array.from(document.getElementsByClassName("id-imm")), Array.from(document.getElementsByClassName("id-inst")), Array.from(document.getElementsByClassName("id-rd")), Array.from(document.getElementsByClassName("id-wb")), Array.from(document.getElementsByClassName("id-m")), Array.from(document.getElementsByClassName("id-ex")), Array.from(document.getElementsByClassName("id-pc"));
Array.from(document.getElementsByClassName("ex-wb")), Array.from(document.getElementsByClassName("ex-m")), Array.from(document.getElementsByClassName("alu-ctrl")), Array.from(document.getElementsByClassName("alu-src")), Array.from(document.getElementsByClassName("ex-pc")), Array.from(document.getElementsByClassName("ex-a")), Array.from(document.getElementsByClassName("ex-zero")), Array.from(document.getElementsByClassName("ex-wb")), Array.from(document.getElementsByClassName("ex-imm")), Array.from(document.getElementsByClassName("ex-rd"));
Array.from(document.getElementsByClassName("mem-wb")), Array.from(document.getElementsByClassName("mem-read")), Array.from(document.getElementsByClassName("mem-write")), Array.from(document.getElementsByClassName("branch")), Array.from(document.getElementsByClassName("mem-zer")), Array.from(document.getElementsByClassName("b-targ")), Array.from(document.getElementsByClassName("pc-src")), Array.from(document.getElementsByClassName("mem-b")), Array.from(document.getElementsByClassName("mem-mem")), Array.from(document.getElementsByClassName("mem-rd"));
Array.from(document.getElementsByClassName("mem-to-reg")), Array.from(document.getElementsByClassName("reg-write")), Array.from(document.getElementsByClassName("wb-mem")), Array.from(document.getElementsByClassName("write-data")), Array.from(document.getElementsByClassName("wb-alu")), Array.from(document.getElementsByClassName("wb-rd"));
function w() {
  f.get("pcp-4").forEach((e) => e.style.backgroundColor = "aqua"), f.get("pc-to-things").forEach((e) => e.style.backgroundColor = "aqua");
}
console.log(_("addi x0, x1, 16"));
w();
