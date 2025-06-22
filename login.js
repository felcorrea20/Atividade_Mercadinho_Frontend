const botao = document.getElementById('entrar');
botao.addEventListener('click' ,
    function(){
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let login = document.getElementById("login").value;
        let senha = document.getElementById("senha").value;

        const logado = usuarios.find(user => user.login === login && user.senha === senha);

        if (logado){
            localStorage.setItem('userLogado', login);
            window.location.href = "mercadinho.html";
        }else{
            document.getElementById('mensagemErro').textContent = "Login e senha incorretos."
        }

    }
)
