document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const promptButtons = document.querySelectorAll(".prompt-suggestion");

  function appendMessage(role, text) {
    const container = document.createElement("div");
    container.className =
      role === "user"
        ? "text-sm bg-gray-100 text-gray-800 p-2 my-2 rounded-lg text-right"
        : "text-sm bg-blue-100 text-blue-900 p-2 my-2 rounded-lg text-left";
    container.textContent = text;
    document.querySelector(".chat-log").appendChild(container);
  }

  function handleSend(msg) {
    if (!msg.trim()) return;
    appendMessage("user", msg);
    input.value = "";

    // Placeholder for backend integration
    setTimeout(() => {
      appendMessage("assistant", "Let me help you with that. (GPT response placeholder)");
    }, 500);
  }

  sendBtn.addEventListener("click", () => {
    handleSend(input.value);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend(input.value);
  });

  promptButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      handleSend(btn.textContent);
    })
  );
});
