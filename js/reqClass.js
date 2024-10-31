export class ReqApi {
    constructor(url, div) {
        this.url = url;
        this.div = div;
    }

    async req(url = this.url, div = this.div) {
        div.innerHTML = '';
        try {
            const fetchApi = await fetch(url);
            const json = await fetchApi.json();

            if (Array.isArray(json)) {
                json.forEach((element) => {
                    this.adicionarOpcao(element);
                });
            } else {
                const data = Object.values(json)[0];
                data.forEach((element) => {
                    this.adicionarOpcao(element)
                })
            }
        } catch (error) {
            console.error("Erro ao buscar:", error);
        }
    }

    adicionarOpcao(element) {
        const optionElement = document.createElement('option');
        optionElement.value = element.codigo;
        optionElement.innerText = element.nome;
        this.div.appendChild(optionElement);
    }

}