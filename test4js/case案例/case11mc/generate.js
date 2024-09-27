;

function generateWorld() {
  generateLand()
  for (let i = 0; i < randInt(3, 7); i++) {
    const col = randInt(1, width)
    generateATree(landFx(col) - 1, col)
    world.setBlock(landFx(col), col, blocks.dirt)
  }
  generateOre(blocks.diamondOre, 4, 2)
  generateOre(blocks.ironOre, 5, 2)
  generateOre(blocks.coalOre, 7, 3)
  generateCave()
}

function generateATree(row, col) {
  const treeH = randInt(5, 8)
  for (let i = row; i > row - treeH; i--) {
    world.setBlock(i, col, blocks.oak_log)
  }
  const leafH = randInt(3, 6)
  const leafW = randInt(3, 6)
  world.setBlocks(row - leafH - treeH, col - leafW, row - treeH, col + leafW, blocks.leaf)
}

function generateLand() {
  for (let col = 0; col < width; col++) {
    let row = landFx(col);
    world.setBlock(row, col, blocks.grass)
    world.setBlocks(row + 1, col, row + 3, col, blocks.dirt)
    world.setBlocks(row + 4, col, height - 1, col, blocks.stone)
  }
}

function generateOre(block, num, r) {
  for (let i = 0; i < randInt(3, 7); i++) {
    let row = randInt(1, height - 1)
    let col = randInt(1, width - 1)
    console.log(row, col)
    console.log(world.getBlock(row, col), blocks.stone)
    if (world.getBlock(row, col) === blocks.stone) {
      world.setClusterBlocks(row, col, block, randInt(num - 1, num + 1), r)
    }
  }
}

function generateCave() {
  for (let col = 0; col < width; col++) {
    const row = caveFx(col);
    world.setBlocks(row - 1, col, row + 2, col, false)
  }
}

function landFx(x) {
  const y = Math.sin((x + 5) / 10) * 30 / (x + 5) * Math.log(x + 5) + 10
  return y >> 0
}

function caveFx(x) {
  const y = 2 ** (x / 15) * Math.cos(x / 7) + 20
  return y >> 0
}
;