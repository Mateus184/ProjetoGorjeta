console.log('oi')

console.log ('fumegando')

function calc(event) {
    event.preventDefault();

    let conta = document.getElementById('conta').value;
    let qualidade = document.getElementById('service').value;
    let qtdPessoas = document.getElementById('pessoas').value;

    if(conta =='' | qualidade == 0) {
        alert("Favor preencher os valores requeridos")
        return;
    }

    if(qtdPessoas == "" | qtdPessoas <= 1) {
        qtdPessoas = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    };

    let total = (conta * qualidade) / qtdPessoas;
    total = total.toFixed(2)
    document.getElementById('tips').innerHTML = total;
    document.getElementById('totalTips').style.display = "block";


//alert('deu certo!')
 }

document.getElementById('totalTips').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('form1').addEventListener('submit', calc);