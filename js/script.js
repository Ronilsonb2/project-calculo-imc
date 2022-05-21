

function enviaDados(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let res = (peso/(altura*altura)).toFixed(2);

    console.log(res);

    if( peso && altura != '') {
        if(res <= 18.5){
            document.querySelector('.grid-area-cards .card2').classList.add('resultado-open');
            document.querySelector('.box-card-2').style.display = 'none';
            document.querySelector('.box-card-3').style.display = 'none';
            document.querySelector('.box-card-4').style.display = 'none';

            document.querySelector('.box-card-1 .res-calc').innerHTML = `Seu resultado e ${res}`

        } else if (res > 18.5 && res < 24.9){
            document.querySelector('.grid-area-cards .card2').classList.add('resultado-open');
            document.querySelector('.box-card-1').style.display = 'none';
            document.querySelector('.box-card-3').style.display = 'none';
            document.querySelector('.box-card-4').style.display = 'none';

            document.querySelector('.box-card-2 .res-calc').innerHTML = `Seu resultado e ${res}`

        } else if (res > 25 && res < 30){
            document.querySelector('.grid-area-cards .card2').classList.add('resultado-open');
            document.querySelector('.box-card-1').style.display = 'none';
            document.querySelector('.box-card-2').style.display = 'none';
            document.querySelector('.box-card-4').style.display = 'none';

            document.querySelector('.box-card-3 .res-calc').innerHTML = `Seu resultado e ${res}`

        } else{
            document.querySelector('.grid-area-cards .card2').classList.add('resultado-open');
            document.querySelector('.box-card-1').style.display = 'none';
            document.querySelector('.box-card-2').style.display = 'none';
            document.querySelector('.box-card-3').style.display = 'none';

            document.querySelector('.box-card-4 .res-calc').innerHTML = `Seu resultado e ${res}`

        }
    }else {
        alert("Favor preencher os campos corretamente")
    }
}

// function recalcular(){
//     window.
// }


