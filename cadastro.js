// cadastro 
const botao = document.getElementById('btnCadastrar');
//let usuarios = [];

// cadastrar 
botao.addEventListener('click',
    function () {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuario = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }
        const indexEditando = document.getElementById('indexEditar').value;

        if(indexEditando !== ""){
            usuarios[indexEditando] = usuario;
            document.getElementById('indexEditar').value = "";
        }else{
            usuarios.push(usuario);
        } 

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        document.getElementById('login').value = '';
        document.getElementById('senha').value = '';

        const confirmacao = document.querySelector('.confirmacaoCadastro');
        confirmacao.textContent = "Usuário cadastrado com sucesso!";
        confirmacao.style.color = "green";

        setTimeout( () => {
            confirmacao.textContent = "";
            window.location.href = "login.html";
        }, 3000);


    }
);