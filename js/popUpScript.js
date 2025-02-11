// Abre a popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Fecha a popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Manipula o envio do formulário
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageText = document.getElementById('messageText').value;
    if (messageText.trim() === "") {
        alert("Please enter a message!");
        return;
    }

    // API endpoint (substitua pela URL da sua API real)
    const apiUrl = 'https://example.com/api/send-message';

    // Dados que serão enviados para a API
    const data = {
        message: messageText
    };

    // Fazendo a requisição para enviar a mensagem
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('popupResponse').textContent = 'Message sent successfully!';
        document.getElementById('popupResponse').classList.remove('error');
        document.getElementById('popupResponse').classList.add('success');
        document.getElementById('messageText').value = ''; // Limpa o campo de texto
    })
    .catch(error => {
        document.getElementById('popupResponse').textContent = 'Error sending message. Please try again later.';
        document.getElementById('popupResponse').classList.add('error');
    });
});

// Abertura da popup
document.getElementById('popupCloseBtn').addEventListener('click', closePopup);

// Fechar a popup ao clicar fora da área da popup
document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        closePopup();
    }
});

// Exemplo de ativação da popup (pode ser vinculado a um botão ou evento)
document.getElementById('contactButton').addEventListener('click', openPopup);