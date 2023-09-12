var b1_visible = false;

function show(e, i) {
  p = document.getElementById(i);
  if(!b1_visible) {
    p.style.display = "block";
  } else {
    p.style.display = "none";    
  }
  b1_visible = !b1_visible;
}
