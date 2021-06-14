//Se jogou a rodada 2
let btn = document.querySelector("#btn");
let btnB = document.querySelector("#btnB");
let res = document.querySelector(".res");
let resB = document.querySelector(".resB");

//Se jogou a rodada 2
btn.addEventListener("click", () => {
  let c = parseFloat(document.querySelector("#c").value);
  let precoJogador = parseFloat(document.querySelector("#precoJogador").value);
  let pontosRodada1 = parseFloat(
    document.querySelector("#pontosRodada1").value
  );
  let pontosRodada2 = parseFloat(
    document.querySelector("#pontosRodada2").value
  );
  let resultado = (c * precoJogador + pontosRodada2 - 2 * pontosRodada1) / 14;

  if (resultado.toFixed(2) >= 0) {
    res.innerHTML = `<div class="res">Pontuação mínima para valorizar: <span class="green">+${resultado.toFixed(
      2
    )}</span</div>`;
  } else {
    res.innerHTML = `<div>Pontuação mínima para valorizar: <span class="red">${resultado.toFixed(
      2
    )}</span</div>`;
  }
});

//Se não jogou a rodada 2
btnB.addEventListener("click", () => {
  let cB = parseFloat(document.querySelector("#cB").value);
  let precoJogadorB = parseFloat(
    document.querySelector("#precoJogadorB").value
  );
  let pontosRodada1B = parseFloat(
    document.querySelector("#pontosRodada1B").value
  );
  let resultadoB = (cB * precoJogadorB - 4 * pontosRodada1B) / 7;

  if (resultadoB.toFixed(2) >= 0) {
    resB.innerHTML = `<div class="res2">Pontuação mínima para valorizar: <span class="green">+${resultadoB.toFixed(
      2
    )}</span</div>`;
  } else {
    resB.innerHTML = `<div class="res2">Pontuação mínima para valorizar: <span class="red">${resultadoB.toFixed(
      2
    )}</span</div>`;
  }
});
