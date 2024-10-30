import { ReqApi } from "./reqClass.js";

const selectTipos = document.querySelectorAll('.tipos-div button');
const selectMarcas = document.querySelector('#marcas');
const selectModelos = document.querySelector('#modelos')
let dataType = '';


/* Escolher tipo de Veiculo */

selectTipos.forEach((botao) => {
  botao.addEventListener('click', function () {
    dataType = botao.getAttribute('data-type');
    const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas`
    reqClass(url, selectMarcas);
  });
});



/* Escolher Marca do Veiculo */


function reqClass(url, div){

  console.log('função ativada');
  

  const reqClass = new ReqApi()

  reqClass.req(url, div)

};

selectMarcas.addEventListener('change', function handleClick() {
  const valorSelecionado = selectMarcas.value;
  if (valorSelecionado) {
    const url = `https://parallelum.com.br/fipe/api/v1/${dataType}/marcas/${valorSelecionado}/modelos`
    reqClass(url, selectModelos);
  }
});




/* Escolher Modelo do Veiculo */




// async function modelsApi(id, tipo) {
//   try {
//     const fetchApiModels = await fetch(
//       `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${id}/modelos`
//     );
//     const modelsJson = await fetchApiModels.json();
//     console.log(modelsJson);
//   } catch (error) {
//     console.error("Erro ao buscar modelos:", error);
//   }
// }
