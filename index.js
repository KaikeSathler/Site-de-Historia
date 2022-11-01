let botaoNavbar = document.getElementById("navbar-botao"); //Pegando o elemento do botão da navbar
let containerNavbar = document.getElementsByClassName("container-items"); //Pegando os items da navbar
let navbarAtivo = false; // Criando uma váriavel


// Verificação / Sistema

if(botaoNavbar) {
    botaoNavbar.addEventListener("click", function() {
        if(!navbarAtivo) {
            containerNavbar[0].classList.add("ativo");
            navbarAtivo = !navbarAtivo;
        }
        else {
            containerNavbar[0].classList.remove("ativo");
            navbarAtivo = !navbarAtivo;
        }
    });
}