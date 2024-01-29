document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('questionForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var inputText = document.getElementById('inputText').value;
        var chatContainer = document.getElementById('chatContainer');

        // Append the user's question to the chat container
        appendMessage("You: " + inputText, chatContainer,true);

        fetch('/process_text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'inputText=' + encodeURIComponent(inputText),
        })
            .then(response => response.json())
            .then(data => {
                // Append the AI's answer to the chat container
                appendMessage("AI: " + data.answer, chatContainer, false);
            })
            .catch(error => {
                console.error('Error:', error);
                // Append an error message to the chat container
                appendMessage("AI: Error - Unable to fetch answer.", chatContainer, false);
            });

        // Clear the input text box
        document.getElementById('inputText').value = '';
    });

    // function appendMessage(message, container) {
    //     var messageElement = document.createElement('div');
    //     messageElement.textContent = message;
    //     container.appendChild(messageElement);
    // }
    function appendMessage(message, container, isUser = false) {
        var messageElement = document.createElement('div');
        messageElement.className = isUser ? 'message user-message' : 'message ai-message';
        messageElement.textContent = message;
        container.appendChild(messageElement);
    }
});
