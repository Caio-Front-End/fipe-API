import { ReqApi } from "./reqClass.js";

const selectTipos = document.querySelectorAll('.tipos-div button');
const selectMarcas = document.querySelector('#marcas');
const selectModelos = document.querySelector('#modelos');
const selectVeiculo = document.querySelector('.veiculo-div');
let dataType = '';


/* Escolher tipo de Veiculo */

selectTipos.forEach((botao) => {
  botao.addEventListener('click', function () {
    dataType = botao.getAttribute('data-type');
    const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas`
    reqClass(url, selectMarcas);
  });
});



/* Escolher marca do Veiculo */

selectMarcas.addEventListener('change', function () {
  const valorSelecionado = selectMarcas.value;
  if (valorSelecionado) {
    const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${valorSelecionado}/modelos`
    reqClass(url, selectModelos);
  }
});


/* Escolher modelo do Veiculo */

selectModelos.addEventListener('change', function () {
  const valorSelecionado = selectModelos.value;
  console.log(valorSelecionado);
  const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${valorSelecionado}/modelos/${valorSelecionado}`
  reqClass(url, selectVeiculo)
})



/* Requisição da API */

function reqClass(url, div){

  const reqClass = new ReqApi(url, div)

  reqClass.req()

};