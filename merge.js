const PDFMerger = require("pdf-merger-js").default;
const path = require("path");
var merger = new PDFMerger();
const mergerpdfs = async (p1, p2) => {
  let d = new Date().getTime();

  await merger.add(p1);
  await merger.add(p2);

  await merger.save(`public/${d}.pdf`);
  return d;
};

module.exports = { mergerpdfs };
