let puntos = document.getElementById("puntos");
let total = 0;
puntos.innerHTML=total;
let iconos = document.querySelectorAll(".icono");
let i = 0;
let iconoSeleccionado = iconos[i];
let iconoAnterior = iconos[i - 1];
window.onload = () => {
    cargarIcono();
    function cargarIcono(i) {
        iconoSeleccionado.style.opacity = "1";
    };
    let paises1 = document.querySelectorAll(".st0");
    paises1.forEach(item => {
        item.addEventListener("click", e => {
            switch (i) {
                case 0:
                    console.log(e.target);
                    if (e.target.id == 21) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 1:
                    console.log(e.target);
                    if (e.target.id == 22) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 2:
                    console.log(e.target);
                    if (e.target.id == 23) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 3:
                    console.log(e.target);
                    if (e.target.id == 24) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 4:
                    console.log(e.target);
                    if (e.target.id == 25) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 5:
                    console.log(e.target);
                    if (e.target.id == 26) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 6:
                    console.log(e.target);
                    if (e.target.id == 27) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 7:
                    console.log(e.target);
                    if (e.target.id == 28) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 8:
                    console.log(e.target);
                    if (e.target.id == 29) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 9:
                    console.log(e.target);
                    if (e.target.id == 30) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 10:
                    console.log(e.target);
                    if (e.target.id == 31) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 11:
                    console.log(e.target);
                    if (e.target.id == 32) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 12:
                    console.log(e.target);
                    if (e.target.id == 33) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 13:
                    console.log(e.target);
                    if (e.target.id == 34) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 14:
                    console.log(e.target);
                    if (e.target.id == 35) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 15:
                    console.log(e.target);
                    if (e.target.id == 36) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 16:
                    console.log(e.target);
                    if (e.target.id == 37) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 17:
                    console.log(e.target);
                    if (e.target.id == 38) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 18:
                    console.log(e.target);
                    if (e.target.id == 39) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i].style.opacity="1";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
                case 19:
                    console.log(e.target);
                    if (e.target.id == 40) {
                        total += 100;
                        puntos.innerHTML=total;
                        i++;
                        e.target.style.fill = "greenyellow";
                        iconos[i-1].remove();
                    } else {
                        total -= 50;
                        puntos.innerHTML=total;
                        e.target.style.fill = "red";
                    }
                    break;
            }
        })
    })
}
if (i == 41){
    alert(`TU PUNTUACIÓN FINAL ES: ${total}`);
    iconos[i-1].remove();
}