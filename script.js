// Elements
const chatBox = document.getElementById("chat");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

// Send message
function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;

  const msgDiv = document.createElement("div");
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);

  messageInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});
