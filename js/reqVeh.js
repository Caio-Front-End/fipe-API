export class ReqVeh {

    constructor(url, div, newDiv){
        this.url = url
        this.div = div
        this.newDiv = newDiv
    }

    async req(url = this.url, div = this.div){

        const fetchApi = await fetch(url);
        const json =  await fetchApi.json()

        console.log(json);

        this.reloadPage(div, this.newDiv)
        this.result(json, this.newDiv)

    }

    reloadPage(div, newDiv){
        div.classList.remove(...div.classList)
        div.classList.add('remove');
        newDiv.classList.remove('remove')
        console.log(div.classList);
    }

    result(json, newDiv){

        const novaDiv = newDiv

        const modeloNome = document.createElement('p')
        modeloNome.innerText = json.Modelo

        console.log(newDiv);
        
        novaDiv.appendChild(modeloNome)
    }
}