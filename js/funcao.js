function addData() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se o campo nome ou email está vazio
    if (!nome || !email || !telefone || !mensagem) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    var novoContato = {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "mensagem": mensagem
    };
    
    // Exibir uma mensagem de alerta ao usuário
    alert("Sua mensagem foi enviada com sucesso!");

    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("mensagem").value = "";
}