export class ReqApi {

    async req(url, div){

    div.innerHTML = '';

        console.log(url, div);
        

    try {
        const fetchApi = await fetch(
            url
        );
        const json = await fetchApi.json();

        console.log(json);
        

        json.forEach((element) => {
        const optionElement = document.createElement('option');
        optionElement.value = element.codigo;
        optionElement.innerText = element.nome;
        div.appendChild(optionElement);

        });
    } catch (error) {
        console.error("Erro ao buscar marcas:", error);
    }
    


    }

}