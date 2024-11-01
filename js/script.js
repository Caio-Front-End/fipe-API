import { ReqApi } from './reqClass.js';
import { ReqVeh } from './reqVeh.js';
import { VehicleDetails } from './VehicleDetails.js';

const pesquisaDiv = document.querySelector('.pesquisa-div');
const selectTipos = document.querySelectorAll('.tipos-div button');
const selectMarcas = document.querySelector('#marcas');
const selectModelos = document.querySelector('#modelos');
const selectAno = document.querySelector('#ano');
const pesquisarVeiculo = document.getElementById('pesquisar');
const resultado = document.querySelector('.veiculo-div');
let dataType = '';
let marcaSelecionada = '';
let modeloSelecionado = '';
let anoSelecionado = '';

/* Escolher tipo de Veiculo */
selectTipos.forEach((botao) => {
  botao.addEventListener('click', function () {
    dataType = botao.getAttribute('data-type');
    const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas`;
    reqClass(url, selectMarcas);
  });
});

/* Escolher marca do Veiculo */
selectMarcas.addEventListener('change', function () {
  marcaSelecionada = selectMarcas.value;
  const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${marcaSelecionada}/modelos`;
  reqClass(url, selectModelos);
});

/* Escolher modelo do Veiculo */
selectModelos.addEventListener('change', function () {
  modeloSelecionado = selectModelos.value;
  const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${marcaSelecionada}/modelos/${modeloSelecionado}/anos`;
  reqClass(url, selectAno);
});

/* Escolher ano do Veiculo */
selectAno.addEventListener('focus', function () {
  anoSelecionado = selectAno.value;
  const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${marcaSelecionada}/modelos/${modeloSelecionado}/anos/${anoSelecionado}`;
  pesquisarVeiculo.removeAttribute('disabled');
  pesquisarVeiculo.setAttribute('data-type', `${url}`);
});

/* Pesquisar Veiculo */
pesquisarVeiculo.addEventListener('click', async function () {
  const url = pesquisarVeiculo.getAttribute('data-type');

  const vehicleDetailsInstance = new VehicleDetails(url);
  const vehicleData = await vehicleDetailsInstance.fetchDetails();

  if (vehicleData) {
    resultado.innerHTML = `
      <h2>Detalhes do Veículo</h2>
      <p><strong>Modelo:</strong> ${vehicleData.modelo}</p>
      <p><strong>Marca:</strong> ${vehicleData.marca}</p>
      <p><strong>Ano:</strong> ${vehicleData.ano}</p>
      <p><strong>Preço:</strong> ${vehicleData.preco}</p>
      <p><strong>Combustível:</strong> ${vehicleData.combustivel}</p>
      <p><strong>Código Fipe:</strong> ${vehicleData.codigoFipe}</p>
      <p><strong>Mês de Referência:</strong> ${vehicleData.mesReferencia}</p>
    `;

    pesquisaDiv.classList.add('remove');
    resultado.classList.remove('remove');
  }
});

/* Requisição da API */
function reqClass(url, div) {
  const req = new ReqApi(url, div);
  req.req();
}

function reqVeh(url, div, newDiv) {
  const reqVeh = new ReqVeh(url, div, newDiv);
  reqVeh.req();
}
