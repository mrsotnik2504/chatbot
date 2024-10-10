function sendMessage() {
    const input = document.getElementById("userInput");
    const messageText = input.value.trim();
    if (messageText === "") return;

    displayMessage(messageText, "user");
    input.value = "";

    // Отправка сообщения на сервер
    fetch('/send_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
    })
    .then(response => response.json())
    .then(data => {
        displayMessage(data.response, "bot");
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

    setTimeout(() => {
        displayMessage("...", "bot");
    }, 500);
}

function displayMessage(text, sender) {
    const messages = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight; // Прокрутка вниз
}
