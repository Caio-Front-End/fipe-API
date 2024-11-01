import { ReqApi } from "./reqClass.js";

const selectTipos = document.querySelectorAll('.tipos-div button');
const selectMarcas = document.querySelector('#marcas');
const selectModelos = document.querySelector('#modelos');
const pesquisarVeiculo = document.getElementById('pesquisar');
let dataType = '';
let marcaSelecionada = ''
let modeloSelecionado = ''


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
  marcaSelecionada = selectMarcas.value;
  const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${marcaSelecionada}/modelos`
  reqClass(url, selectModelos)
});


/* Escolher modelo do Veiculo */

selectModelos.addEventListener('change', function () {
  modeloSelecionado = selectModelos.value;
  const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${marcaSelecionada}/modelos/${modeloSelecionado}`
  pesquisarVeiculo.removeAttribute('disabled')
  reqClass(url)
})



/* Requisição da API */

function reqClass(url, div){

  const reqClass = new ReqApi(url, div)

  reqClass.req()

};