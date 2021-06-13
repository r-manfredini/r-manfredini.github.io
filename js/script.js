//Se jogou a rodada 2
let btnRodada1 = document.querySelector(".btnRodada1");
let res = document.querySelector(".res");

function valorizacao() {
  btnRodada1.addEventListener("click", () => {
    let c = parseFloat(document.querySelector("#c").value);
    let precoJogador = parseFloat(
      document.querySelector("#precoJogador").value
    );
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
      res.innerHTML = `<div class="res">Pontuação mínima para valorizar: <span class="red">${resultado.toFixed(
        2
      )}</span</div>`;
    }
  });
}
valorizacao();
