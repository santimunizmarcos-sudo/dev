let cookies = 0;
let cookiesporsegundo = o;

const contador = document.getElementById("contador");
const cookie = document.getElementById("cookie");
const mejora1 = document.getElementById("mejora1");

cookie.oneclick = () =>  {
    galletas++;
}

mejora1.oneclick = () => {
    if (cookies >= 50) {
        galletas -= 50;
        galletasporsegundo += 1;
        actuailizar();
        } else {
            alerts("¡no tienes sufisientes galletas!")
        }
          };

          setInterval(() => {
           galletas += galletasporsegundo;
          actuailizar();
},1000);
const mejorar2 = document.getElementById("mejorar2");
const mejorar3 = document.getElementById("mejorar3");

mejorar2.onclick = () => {
  if (galletas >= 500) {
    galletas -= 500;
    galletasPorSegundo += 10;
    actualizar();
  } else {
    alert("¡No tienes suficientes galletas!");
  }
};

mejorar3.onclick = () => {
  if (galletas >= 2000) {
    galletas -= 2000;
    galletasPorSegundo += 50;
    actualizar();
  } else {
    alert("¡No tienes suficientes galletas!");
  }
};

