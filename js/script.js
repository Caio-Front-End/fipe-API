const selectTipos = document.querySelectorAll('.tipos-div button');
const selectMarcas = document.querySelector('#marcas');
let dataType = '';


selectTipos.forEach((botao) => {
  botao.addEventListener('click', function () {
    dataType = botao.getAttribute('data-type');
    console.log(dataType);
    carsApi(dataType);
  });
});

async function carsApi(tipo) {
  selectMarcas.innerHTML = '';

  try {
    const fetchApiBrands = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas`
    );
    const brandsJson = await fetchApiBrands.json();

    brandsJson.forEach((element) => {
      const optionElement = document.createElement('option');
      optionElement.value = element.codigo;
      optionElement.innerText = element.nome;
      selectMarcas.appendChild(optionElement);

    });
  } catch (error) {
    console.error("Erro ao buscar marcas:", error);
  }
}

selectMarcas.addEventListener('change', function handleClick() {
  const valorSelecionado = selectMarcas.value;
  if (valorSelecionado) {
    modelsApi(valorSelecionado, dataType);
  }
});

async function modelsApi(id, tipo) {
  try {
    const fetchApiModels = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${id}/modelos`
    );
    const modelsJson = await fetchApiModels.json();
    console.log(modelsJson);
  } catch (error) {
    console.error("Erro ao buscar modelos:", error);
  }
}
