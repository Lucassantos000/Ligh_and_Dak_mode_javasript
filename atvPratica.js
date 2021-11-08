function changeMode(){

    let texto = botao.outerText;

    if( texto === 'Dark Mode'){
        changeDark();
    }

    else{
        lightMode();
    }
    
}

function changeDark(){
    container.style.backgroundColor = "rgba(0,0,0,0.89)"
    h1.innerHTML = "Dark Mode ON";
    h1.style.color = "white";
    botao.innerHTML = "Blank Mode";
    botao.style.color = "white";
    footer.style.backgroundImage = "linear-gradient(90deg, rgba(42,41,40,0.7) , rgba(0,0,0,1) )"
    footer.style.color = "white";
}

function lightMode(){
    container.style.backgroundColor = "rgba(216, 207, 207, 0.612)";
    h1.innerHTML = "Light Mode ON";
    h1.style.color = "gray";
    botao.innerHTML = "Dark Mode";
    botao.style.color = "black";
    footer.style.backgroundImage = "linear-gradient(90deg, rgba(6, 66, 51, 0.612), rgba(148, 144, 144, 0.612))"
    footer.style.color = "rgba(46, 1, 54, 0.925)";

}








const botao = document.getElementById('modo-selector');
const h1 = document.getElementById('page-title');
const container = document.getElementsByClassName('container')[0];
const footer = document.getElementsByTagName('footer')[0];




botao.addEventListener('click', changeMode);

