;

const height = 36
const width = 64
const px = 16;

const main = document.querySelector('.main')

for (let i = 0; i < height; i++){
  const row = document.createElement('div')
  row.classList.add('row')
  for (let j = 0; j < width; j++){
    const cell = document.createElement('div')
    cell.classList.add('cell')
    // 给cell添加属性
    cell.setAttribute('block', '')
    cell.block = 'air'
    row.appendChild(cell)
  }
  main.appendChild(row)
}
;