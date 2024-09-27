;
main.addEventListener('click', function (e){
  let child = e.target
  let parent = child.parentNode
  const col = Array.from(parent.children).indexOf(child)
  child = parent
  parent = parent.parentNode
  const row = Array.from(parent.children).indexOf(child)
  console.log(world.getBlock(row,col))
  world.setBlock(row,col,false)
})
;