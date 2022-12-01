window.onload=function(){
    let imgs=document.querySelectorAll(".img_secundarias img");
    for ( let img of imgs){
        img.style.width="150px";
        img.style.height="150px";
        img.addEventListener("click",function(){
            document.querySelector(".img_principal img").setAttribute("src",this.getAttribute("src"));
        });
    }
}

let num = 0;

function carritoAnimacion() {
    num += 1;
    document.getElementById("imagen_carrito2").classList.toggle("carrito1")
    document.getElementById("not2").innerHTML = num;
}