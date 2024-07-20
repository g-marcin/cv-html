

const GET_PDF_BUTTON_LABEL = "Pobierz PDF";
const LOADER = '...'

function showLoader(){
    const getPdfButton = document.querySelector('.getPdf-button')
    getPdfButton.innerHTML=LOADER
    setTimeout(()=>{
        getPdfButton.innerHTML=GET_PDF_BUTTON_LABEL
    },3000)
}

function fetchPdf() {
    const url = window.location.href
    showLoader()
    window.location.href=url + "api/pdf"
}