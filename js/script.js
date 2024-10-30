const select = document.querySelector('#marcas');

async function carsApi() {
  try {
    const fetchApiBrands = await fetch(
      'https://parallelum.com.br/fipe/api/v1/carros/marcas',
    );
    const brandsJson = await fetchApiBrands.json();
    brandsJson.forEach((element) => {
      const brands = element.nome;
      const optionElement = document.createElement('option');
      optionElement.value = brands;
      optionElement.innerText = brands;
      select.appendChild(optionElement);
    });
    
    select.addEventListener('change', function handleClick(){

      const valorSelecionado = select.value;
      
      const filterBrands = brandsJson.filter(brand => brand.nome === `${valorSelecionado}`)
      
      filterBrands.forEach((key) => {
        modelsApi(key.codigo)
      })
    });
  } catch (error) {}
}

carsApi();


async function modelsApi(id) {
  
  const fetchApiModels = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`,
  );
  const modelsJson = await fetchApiModels.json();

  console.log(modelsJson);
  


}

