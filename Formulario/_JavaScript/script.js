function enviarFormulario() {
    const nome        = formulario.nome.value; //apontando para o valor do input 'nome'
    const email       = formulario.email.value;
    const senha       = formulario.senha.value;
    const confirSenha = formulario.senha2.value;


    if (senha.length < 8) {
        alert("A deve ter ao menos 8 digitos!");
        formulario.senha.focus();
        return false;
    } else if (senha != confirSenha) {
        alert("A senhas são diferentes!");
        formulario.confirSenha.focus();
        return false;
    }
}
