// Função que mostra um alerta quando o botão "Saiba mais" for clicado
document.getElementById("learn-more").addEventListener("click", function() {
    alert("Obrigado por querer saber mais sobre nosso site!");
});

// Função para manipular o envio do formulário de contato
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Exibe uma mensagem de confirmação
    document.getElementById("form-message").innerText = `Obrigado, ${name}! Sua mensagem foi enviada.`;
    
    // Limpa o formulário
    document.getElementById("contact-form").reset();
});
