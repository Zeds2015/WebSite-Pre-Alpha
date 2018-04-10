
//Função anonima, logo após criada ela é executada, função principal do projeto!
var init = function () {
    const $ = document.querySelector.bind(document);
    var usuario = $('input[name=userName]');
    var senha = $('input[name=userPass]');

    //Esta função modifica o valor dos campos. Só serão passados como argumentos campos de texto.
    var modificaTexto = (campo) => {
        campo.style.color = 'black';
        if (campo.type !== 'text') {
            console.log('Só aceitamos campos de texto!');
        } else if (campo.value === 'Digite o seu nome de usuário' || campo.value === 'Digite a sua senha') {
            campo.value = '';
            if (campo.name === 'userPass') {
                campo.type = 'password';
            }
        }
    };
    //Função que reverte o texto de um determinado campo este lhe é passado por argumento.
    var irParaTextoDefault = (campo) => {
        if (!campo.value) {
            campo.style.color = 'gray';
            if (campo.name === 'userName') {
                campo.value = 'Digite o seu nome de usuário';
            } else if (campo.name === 'userPass') {
                campo.type = 'text';
                campo.value = 'Digite a sua senha';
            }
        }
    };

    //quando o usuário clicar em um destes campos,uma função chamará a função de modificar texto!
    usuario.addEventListener('click', () => modificaTexto(usuario));
    senha.addEventListener('click', () => modificaTexto(senha));

    //quando um destes campos perder o foco,uma função chamará a função para voltar ao texto padrão, se o campo estiver vazio!
    usuario.addEventListener('focusout', () => irParaTextoDefault(usuario));
    senha.addEventListener('focusout', () => irParaTextoDefault(senha));

    //quando um destes campos ganha foco, uma função chamará a funcão de modificar o texto!
    usuario.addEventListener('focusin', () => modificaTexto(usuario));
    senha.addEventListener('focusin', () => modificaTexto(senha));
}();