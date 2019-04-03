var btn = document.getElementById('test');

btn.addEventListener("click", dothis);

function dothis(ev){
  console.log(ev.type);
  alert("CLICKEDQ!");
}
