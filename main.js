const btnsDeFiltro = document.querySelector('.navbtns'); // pega tudo que está em navbtns (que são os botões) e coloca na const btnsDeFiltro
const categoriaDeReceita = document.querySelectorAll('.categoria'); //pega tudo que está em categoria (que são os ***tipos*** de receitas no site) e coloca na const categoriaDeReceita

btnsDeFiltro.addEventListener("click", (event) => { //evento ao clicar em um dos botões
    if (event.target.classList.contains("btn")) { // se o alvo do evento contem a classe btn

        btnsDeFiltro.querySelector(".active").classList.remove("active"); //retira o active dele, modificando o highlight para o botão clicado e...
        event.target.classList.add("active"); //...adiciona o active ao alvo que foi clicado
        console.log("teste evento")


        const filtraValor = event.target.getAttribute("data-li"); // const filtraValor pega o atributo do data-li (todos, bolos, drinks, doces)

        categoriaDeReceita.forEach((categoriaDeReceita) => { //para cada categoriaDeReceita 

            if (categoriaDeReceita.classList.contains(filtraValor) || filtraValor === 'todos') { // se a classe do categoriaDeReceita contém valor do filtraValor (bolos, drinks, doces) ou é estritamente igual a 'todos'
                categoriaDeReceita.classList.remove("esconde");
                categoriaDeReceita.classList.add("mostra");
            }

            else {
                categoriaDeReceita.classList.remove("mostra");
                categoriaDeReceita.classList.add("esconde");
            }

        });
    }
});


function ativafavorito1() {


    var img = document.getElementById('curtir');
    if (img.src.match("./img/icone-noire-noir.png")) {
        img.src = "./img/like.png";
    }
    else {
        img.src = "./img/icone-noire-noir.png";
    }
}
function ativafavorito2() {


    var img = document.getElementById('curtir2');
    if (img.src.match("./img/icone-noire-noir.png")) {
        img.src = "./img/like.png";
    }
    else {
        img.src = "./img/icone-noire-noir.png";
    }
}
function ativafavorito3() {


    var img = document.getElementById('curtir3');
    if (img.src.match("./img/icone-noire-noir.png")) {
        img.src = "./img/like.png";
    }
    else {
        img.src = "./img/icone-noire-noir.png";
    }
}
function ativafavorito4() {


    var img = document.getElementById('curtir4');
    if (img.src.match("./img/icone-noire-noir.png")) {
        img.src = "./img/like.png";
    }
    else {
        img.src = "./img/icone-noire-noir.png";
    }
}
function ativafavorito5() {


    var img = document.getElementById('curtir5');
    if (img.src.match("./img/icone-noire-noir.png")) {
        img.src = "./img/like.png";
    }
    else {
        img.src = "./img/icone-noire-noir.png";
    }
}
function ativafavorito6() {


    var img = document.getElementById('curtir6');
    if (img.src.match("./img/icone-noire-noir.png")) {
        img.src = "./img/like.png";
    }
    else {
        img.src = "./img/icone-noire-noir.png";
    }
}

