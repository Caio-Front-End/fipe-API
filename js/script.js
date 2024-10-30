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
      optionElement.innerText = brands;
      select.appendChild(optionElement);
    });
    function handleClick(e) {
      e.preventDefault();
      console.log(select.value);
    }

    select.addEventListener('change', handleClick);
  } catch (error) {}
}

carsApi();
