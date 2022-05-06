let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let nro1: number = Number(data1.value);
  let nro2: number = Number(data2.value);
  let nro3: number = Number(data3.value);

  if (nro1 > nro2) {
    if (nro1 > nro3) {
      console.log("Numero 1 es mayor");
    } else {
      console.log("Numero 3 es Mayor");
    }
  } else {
    if (nro2 > nro3) {
      console.log("Numero 2 Es Mayor");
    } else {
      console.log("Numero 3 Es Mayor");
    }
  }
});
