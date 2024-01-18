//*Seleciona os elementos html no documento
const showMenu = document.querySelector(".btn-show-menu");
const closeMenu = document.getElementById("icon");
const linksMenu = document.querySelectorAll(".navbar a");


//*Adiciona um evento de clique ao botão do menu e adiciona a classe open
showMenu.addEventListener("click", () => {
    document.body.classList.toggle("open");
    closeMenu.classList.toggle("fa-times");    
});

//*altera o background da navbar ao scroll da tela
const scrollValue = () => {

    var menu = document.getElementById('menu');
    var scroll = window.scrollY;

    if(scroll > 10){
        menu.classList.add('bg-navColor');
    }else{
        menu.classList.remove('bg-navColor');
    }
}

window.addEventListener('scroll', scrollValue);



