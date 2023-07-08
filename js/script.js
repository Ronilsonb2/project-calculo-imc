




function enviaDados(){

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let msg = document.querySelector(".msg");
    let res;


    if (!altura.includes('.')) {
        msg.innerHTML = 'Digite a altura no formato correto (exemplo: 1.75)';
    } else if ((peso == '') || (altura == ''))  {
        msg.innerHTML = 'Favor preencher os campos corretamente';
    }else{
        msg.innerHTML = '';
        res = (peso/(altura*altura)).toFixed(2);

        calculaImc(res);
    }
}


function calculaImc(res){
    let msg = document.querySelector(".msg");
    msg.innerHTML = '';

    document.querySelector('.box-card-1').style.display = 'grid';
    document.querySelector('.box-card-2').style.display = 'grid';
    document.querySelector('.box-card-3').style.display = 'grid';
    document.querySelector('.box-card-4').style.display = 'grid';

    if(res <= 18.5){
        document.querySelector('.grid-area-cards .card2').classList.add('resultado-open');
        document.querySelector('.box-card-2').style.display = 'none';
        document.querySelector('.box-card-3').style.display = 'none';
        document.querySelector('.box-card-4').style.display = 'none';

        document.querySelector('.box-card-1 .res-calc').innerHTML = `Seu resultado e ${res}`;
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';

    } else if (res > 18.5 && res < 24.9){
        document.querySelector('.grid-area-cards .card2').classList.add('resultado-open');
        document.querySelector('.box-card-1').style.display = 'none';
        document.querySelector('.box-card-3').style.display = 'none';
        document.querySelector('.box-card-4').style.display = 'none';

        document.querySelector('.box-card-2 .res-calc').innerHTML = `Seu resultado e ${res}`;
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';

    } else if (res > 25 && res < 30){
        document.querySelector('.grid-area-cards .card2').classList.add('resultado-open');
        document.querySelector('.box-card-1').style.display = 'none';
        document.querySelector('.box-card-2').style.display = 'none';
        document.querySelector('.box-card-4').style.display = 'none';

        document.querySelector('.box-card-3 .res-calc').innerHTML = `Seu resultado e ${res}`;
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';

    } else{
        document.querySelector('.grid-area-cards .card2').classList.add('resultado-open');
        document.querySelector('.box-card-1').style.display = 'none';
        document.querySelector('.box-card-2').style.display = 'none';
        document.querySelector('.box-card-3').style.display = 'none';

        document.querySelector('.box-card-4 .res-calc').innerHTML = `Seu resultado e ${res}`;
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';

    }
}

