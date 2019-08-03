const formulario = document.querySelector("#formulario");

// Preview da imagem antes do upload.
const previewImg = document.querySelector(".preview-img");
const fileChooser = document.querySelector('#file-chooser');
fileChooser.onchange = e => {
    const fileToUpload = e.target.files.item(0);
    const reader = new FileReader();

    // evento disparado quando o reader terminar de ler
    reader.onload = e => previewImg.src = e.target.result;

    

    // solicita ao reader que leia o arquivo
    // transformando-o para DataURL.
    // Isso disparará o evento reader.onload.
    reader.readAsDataURL(fileToUpload);

    //console.log(fileToUpload.name);

    getRequestPost()
};


function getRequestPost() {
    
    this.formulario.addEventListener('submit', e => {
        
        e.preventDefault();

        let data = new FormData(formulario);

        fetch('post.php',{
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(data => console.log(data))
     
    })

}
