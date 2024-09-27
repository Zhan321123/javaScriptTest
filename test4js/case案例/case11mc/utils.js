;

function getBlockHtml(row, col) {
  return main.children[row].children[col]
}

function randInt(min, max) {
  const r = Math.random() * (max - min) + min
  return r >> 0
}

;