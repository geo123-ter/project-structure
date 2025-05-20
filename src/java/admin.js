function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (message) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
