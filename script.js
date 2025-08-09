function respond() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const chatlog = document.getElementById("chatlog");

  let botReply = "";

  // Bot's Response Logic
  if (input.includes("hello")) {
    botReply = "Hi Fatima! How can I help you today?";
  } else if (input.includes("admission")) {
    botReply = "Admissions are open. You can apply online!";
  } else if (input.includes("contact")) {
    botReply = "You can reach us at contact@mysite.com.";
  } else if (input.includes("price")) {
    botReply = "We offer student and business plans.";
  } else if (input.includes("bye")) {
    botReply = "Bye! Hope to see you again. 😊";
  } else {
    botReply = "Hmm... I’m not sure I understand that.";
  }

  // Show messages on screen
  chatlog.innerHTML += `<div><strong>You:</strong> ${input}</div>`;
  chatlog.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
  document.getElementById("userInput").value = ""; // Clear input field
  chatlog.scrollTop = chatlog.scrollHeight; // Scroll to bottom
}
