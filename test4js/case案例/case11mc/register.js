;
const blockNames = {
  dirt:'dirt',
  grass:'grass_block_side',
  stone:'stone',
  oak_log:'oak_log',
  oak_planks:'oak_planks',
  leaf:'azalea_leaves',
  coalOre:'coal_ore',
  ironOre:'iron_ore',
  diamondOre:'diamond_ore',
}
const nameBlocks = {}
const blocks = {}

for (const name in blockNames){
  nameBlocks[blockNames[name]] = name
  blocks[name] = new AbstractBlock(blockNames[name])
}
const world = new World()
;