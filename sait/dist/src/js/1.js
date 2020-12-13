const blocks = document.querySelectorAll('.block');
for (let i = 0; i<blocks.length;i++) {
   const block = blocks[i];
   block.addEventListener('mousemove', rotate);
   block.addEventListener('mouseout', stoprotate);
}


function rotate(event){
   const blockitem = this.querySelector('.block-item');
   const halfHeight = blockitem.offsetHeight/2;
   const halfWidth = blockitem.offsetWidth/2;
   blockitem.style.transform = 'rotateX('+-(event.offsetY- halfHeight)/7+'deg) rotateY('+(event.offsetX- halfWidth)/7+'deg)';
}
function stoprotate(event){
  const blockitem = this.querySelector('.block-item');
  blockitem.style.transform = 'rotate(0)';
}