/*let ejecutarCodigo = () => {
    alert("¡Hola, mundo!")
}
ejecutarCodigo();*/
let mytextarea =document.getElementById("titulo1");
mytextarea.innerHTML="Album de fotos";
let elements = document.getElementsByClassName("lead text-muted");
elements[0].innerHTML="<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href=\"https://codepen.io/taj1uddin/pen/eYVrLKy\">Codepen - Taj Uddin</a>.</span>"
let arraytag = document.getElementsByTagName("p");
let btn = arraytag[2];
btn.setAttribute("class","d-none");

//Reto

let arrsvg = document.getElementsByTagName("svg");


let imgs = [ {url:"https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "camino"}, 
{url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt:"energia"}, 
{ url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "papá"} , 
{url:"https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
alt :"day"},{url:"https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
,alt:"dream"},{url:"https://images.unsplash.com/photo-1654041563290-2d6118dba2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
,alt:"orange"},{url: "https://images.unsplash.com/photo-1654045851484-d9aea271acda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
,alt:"sun"},{url: "https://images.unsplash.com/photo-1654032693719-ada7186b1ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
,alt:"dog"},{url: "https://images.unsplash.com/photo-1653971858526-97f2ba1914c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
,alt:"camara"},{url: "https://images.unsplash.com/photo-1654023316132-3665072d427b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
,alt:"sleep"} ];

const arrs = Array.from(arrsvg);

for (let i = 1; i < imgs.length; i++) {
  let img = document.createElement("img");
  img.src = imgs[i].url;
  img.alt = imgs[i].alt;

  arrs[i].replaceWith(img);
}