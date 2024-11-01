import { ReqApi } from "./reqClass.js";
import { ReqVeh } from "./reqVeh.js";

const pesquisaDiv = document.querySelector('.pesquisa-div')
const selectTipos = document.querySelectorAll('.tipos-div button');
const selectMarcas = document.querySelector('#marcas');
const selectModelos = document.querySelector('#modelos');
const selectAno = document.querySelector('#ano');
const pesquisarVeiculo = document.getElementById('pesquisar');
const resultado = document.querySelector('.veiculo-div');
let dataType = '';
let marcaSelecionada = ''
let modeloSelecionado = ''
let anoSelecionado = ''


/* Escolher tipo de Veiculo */

selectTipos.forEach((botao) => {
  botao.addEventListener('click', function () {
    dataType = botao.getAttribute('data-type');
    const url = (`https://parallelum.com.br/fipe/api/v1/${dataType}/marcas`)
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
  const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${marcaSelecionada}/modelos/${modeloSelecionado}/anos`
  reqClass(url, selectAno);
})


/* Escolher ano do Veiculo */

selectAno.addEventListener('focus', function () {
  anoSelecionado = selectAno.value;
  const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${marcaSelecionada}/modelos/${modeloSelecionado}/anos/${anoSelecionado}`
  pesquisarVeiculo.removeAttribute('disabled');
  pesquisarVeiculo.setAttribute('data-type', `${url}`);
})


/* Pesquisar Veiculo */

pesquisarVeiculo.addEventListener('click', function () {
  const url = pesquisarVeiculo.getAttribute('data-type')
  reqVeh(url, pesquisaDiv, resultado)
})


/* Requisição da API */

function reqClass(url, div){
  const req = new ReqApi(url, div)
  req.req()
}

function reqVeh(url, div, newDiv){
  const reqVeh = new ReqVeh(url, div, newDiv)
  reqVeh.req()
}