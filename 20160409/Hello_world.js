var hello = document.getElementById("hello");
  color = ["red","black","yellow","olive","purple","lime","fuchisia"];

hello.addEventListener("click",function(){
  var hello_world = document.createElement("div");
  var i = Math.floor(Math.random() * color.length);
  var size = Math.floor(Math.random() * 100);
  var position = Math.floor(Math.random() * 1000);

      hello_world.innerHTML = "Hello_world";
      hello_world.style.color = color[i];
      hello_world.style.fontSize = size + "px";
      hello_world.style.left = position + "px";
      hello_world.style.position = "relative";


  document.body.appendChild(hello_world);
})
