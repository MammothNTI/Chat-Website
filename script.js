// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD67h7_zcnktMCTZLhr0ZVO3HJjEuxhytU",
  authDomain: "chat-website-2d1bd.firebaseapp.com",
  databaseURL: "https://chat-website-2d1bd-default-rtdb.firebaseio.com",
  projectId: "chat-website-2d1bd",
  storageBucket: "chat-website-2d1bd.appspot.com",
  messagingSenderId: "99109679367",
  appId: "1:99109679367:web:659f186cc4a8a4ad5c95a2",
  measurementId: "G-6X8PRBMSJY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const chatBox = document.getElementById("chat");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

// Listen for messages
db.ref("messages").on("child_added", snapshot => {
  const msg = snapshot.val();
  const msgDiv = document.createElement("div");
  msgDiv.textContent = msg;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
});

// Send message
function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;
  db.ref("messages").push(text);
  messageInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});
