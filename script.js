const btn = document.getElementById('btn-submit');
let linhas = ''
const telefones = []

btn.addEventListener('click', function(e){
    e.preventDefault();

    let nome = document.getElementById('nome-contato');
    let telefone = document.getElementById('numero-telefone')
    const corpoTabela = document.querySelector('tbody')

    if(nome.value == ''){
        nome.value = 'Contato'
    }

    if(telefone.value == 0){
        alert('Digite um telefone')
    }else{
        if(telefones.includes(telefone.value)){
        alert('Esse telefone já foi adicionado na agenda')
        }else{
            telefones.push(telefone.value)
            let linha = '<tr>'
            linha += `<td>${nome.value}</td>`
            linha += `<td>${telefone.value}</td>`
            linha += '</tr>'
            linhas += linha

            corpoTabela.innerHTML = linhas
        }
    }
})
