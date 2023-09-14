document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
function changeIt(){
  alert("Javascript clicked");
}
function myFunction() {
  let text;
  if (confirm("Press a button!") == true) {
    text = "You pressed OK!";
  } else {
    alert("are you sure you want to cancel?");
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}
function changeColor(){
  let d1= document.getElementById("div1");
  let d2= document.getElementById("div2");
  d1.className="c";
  d2.className="d";
}

function changeText(){
  let d1 =  document.getElementById("div1");
  d1.innerHTML = "هذه فقرة";
  d1.style.color = "red";
  let d2 =  document.getElementById("div2");
  d2.innerHTML = "نور الدين الرز ";
 let but =  document.getElementById("but1");
    but.value = "تغيير النص";
 }