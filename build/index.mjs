var _ = /* @__PURE__ */ ((r) => (r.R = "0110011", r.I = "0010011", r.S = "0100011", r.LI = "0000011", r.B = "1100011", r))(_ || {}), m = /* @__PURE__ */ ((r) => (r[r.IF = 0] = "IF", r[r.ID = 1] = "ID", r[r.EX = 2] = "EX", r[r.MEM = 3] = "MEM", r[r.WB = 4] = "WB", r))(m || {});
const d = /* @__PURE__ */ new Map([
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
]), f = /* @__PURE__ */ new Map([
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
]), e = /* @__PURE__ */ new Map([
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
function a(r) {
  return r.split("").reverse().join("");
}
function b(r) {
  return a((parseInt(r) >> 0).toString(2).padStart(11, "0"));
}
function I(r, n, i, t, c) {
  const x = f.get(r), o = e.get(i), u = e.get(t), s = e.get(c);
  let l;
  return r === "sub" ? l = "00100000" : l = "00000000", l + s + u + x + o + n;
}
function g(r, n, i, t, c) {
  const x = f.get(r), o = e.get(i), u = e.get(t);
  return b(c) + u + x + o + n;
}
function M(r, n, i, t, c) {
  const x = f.get(r), o = e.get(i), u = e.get(t), s = b(c);
  return s.slice(5, 12) + u + o + x + s.slice(0, 5) + n;
}
function w(r, n, i, t, c) {
  const x = f.get(r), o = e.get(i), u = e.get(t), s = b(c);
  return s[9] + s.slice(5, 11) + u + o + x + s.slice(1, 5) + s[10] + n;
}
function E(r, n) {
  return n === _.R ? I(r[0], n, r[1], r[2], r[3]) : n === _.I ? g(r[0], n, r[1], r[2], r[3]) : n === _.LI ? g(r[0], n, r[1], r[3], r[2]) : n === _.S ? M(r[0], n, r[1], r[3], r[2]) : n === _.B ? w(r[0], n, r[1], r[2], r[3]) : "Erro";
}
function p(r) {
  const n = r.trim(), i = n.split(new RegExp(/[,\s()]+/)).filter(Boolean), t = d.get(i[0]), c = m.IF, x = E(i, t);
  return { state: c, binary_repr: x, string_repr: n, inst_op: t };
}
console.log(p("addi x0, x1, 16"));
