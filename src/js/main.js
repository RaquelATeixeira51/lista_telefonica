const form = document.getElementById('form-telefone');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputName = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputName.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputName.value = '';
    inputNumero.value = '';
})