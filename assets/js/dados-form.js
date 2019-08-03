   document.querySelector(".btn-estilo").addEventListener("click", event =>{

        event.preventDefault();

        (fetch("http://127.0.0.1:5500/orcamento.html")
        .then ((response) =>console.log(response))
        .then((data) => console.log(data)))
        .catch((erro)=> console.error(erro));
    });