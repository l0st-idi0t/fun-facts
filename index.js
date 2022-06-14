const body = document.body;

let sx = 0, // For scroll positions
    sy = 0;


// Bind a scroll function
window.addEventListener('scroll', easeScroll);


function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}


window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  sx = li(sx,sx,0.07);
  sy = li(sy,sy,0.07);
  
  sx = Math.floor(sx * 100) / 100;
  sy = Math.floor(sy * 100) / 100;
  
  
  // main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
  
  
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}