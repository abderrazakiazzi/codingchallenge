
function hideElem() {
  document.getElementById("list").style.visibility = "hidden"; 
}

function showElem() {
  document.getElementById("list").style.visibility = "visible"; 
}

function myFunction() {
  var x = document.getElementById('list');
  if (x.style.visibility === 'hidden') {
    showElem();
  } else {
    hideElem();
  }
}
