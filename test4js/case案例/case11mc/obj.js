;

class Obj {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class Entity extends Obj {
}

class Player extends Entity {

}

class Zombie extends Entity {

}

class AbstractBlock extends Obj {
  constructor(name) {
    super(name)
  }
}

class Block extends AbstractBlock {
  constructor(name, num) {
    super(name);
    this.num = num
  }
}

class Item extends Obj {

}

class Weapon extends Item {

}

class Sword extends Weapon {

}

class Pickaxe extends Weapon {

}

class Axe extends Weapon {

}

class World {

  setBlock(row, col, block) {
    if ((0 <= row) && (row < height) && (0 <= col) && (col < width)) {
      let b = getBlockHtml(row, col)
      let url = 'none'
      if (block) {
        url = `url(./image/${block.getName()}.png)`
        b.block = block.getName()
      }
      b.style.backgroundImage = url
    }
  }

  setBlocks(rowStart, colStart, rowEnd, colEnd, block) {
    for (let row = rowStart; row <= rowEnd; row++) {
      for (let col = colStart; col <= colEnd; col++) {
        this.setBlock(row, col, block)
      }
    }
  }

  setClusterBlocks(row, col, block, num, r) {
    for (let i = 0; i < num; i++) {
      this.setBlock(row + randInt(-r, r), col + randInt(-r, r), block)
    }
  }

  getBlock(row, col) {
    const name = getBlockHtml(row, col).block
    console.log(name)
    return blocks[nameBlocks[name]]
  }
}
;