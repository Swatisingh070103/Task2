function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();
  if (userInput === "") return;

  const chatMessages = document.getElementById("chatMessages");
  const loadingIcon = document.getElementById("loadingIcon");

  // Show loading icon
  loadingIcon.style.display = "flex";

  // Create a new message element for user's input
  const userMessageElement = document.createElement("div");
  userMessageElement.classList.add("message");
  userMessageElement.textContent = userInput;

  // Append the user's message to the chat messages container
  chatMessages.appendChild(userMessageElement);

  // Clear the input field
  document.getElementById("userInput").value = "";

  // Scroll to the bottom of the chat messages
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Simulate bot response after 1000ms (1 second)
  setTimeout(function () {
    // Process user input and generate bot response
    const botResponse = generateBotResponse(userInput);

    // Create a new message element for bot's response
    const botMessageElement = document.createElement("div");
    botMessageElement.classList.add("message");
    botMessageElement.textContent = botResponse;

    // Append the bot's response to the chat messages container
    chatMessages.appendChild(botMessageElement);

    // Scroll to the bottom of the chat messages after bot's response
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Hide loading icon after bot's response
    loadingIcon.style.display = "none";
  }, 1000); // Delayed response after 1000ms (1 second)
}

// Function to generate a bot response based on user input
function generateBotResponse(userInput) {
  const lowerCaseInput = userInput.toLowerCase();

  // Define bot responses based on specific user input cases
  switch (lowerCaseInput) {
    case "i need help":
      return "How can I assist you?";
    case "credit card":
      return "Please email us at infoneedcreditcard@bank.com for assistance with credit cards.";
    case "address":
      return "Our office address is 72/10, Ville Parle, Mumbai, India.";
    case "hello":
      return "Hi! How can I help you?";
    case "goodbye":
      return "Goodbye! Have a great day!";
    case "services":
      return "We offer a range of services including banking, loans, investments, and more.";
    case "hours":
      return "Our business hours are from 9:00 AM to 5:00 PM, Monday to Friday.";
    case "contact":
      return "You can reach us at +91-1234567890 or email us at info@bank.com.";
    case "website":
      return "Visit our website at www.bank.com for more information.";
    case "net banking":
    case "banking":
      return "You can access net banking services through our website.";
    case "loan application":
    case "loan":
    case "application":
      return "To apply for a loan, please visit our nearest branch or apply online on our website.";
    case "investment options":
    case "investment":
    case "options":
      return "We offer various investment options including mutual funds, fixed deposits, and more. Visit our website for details.";
    case "balance inquiry":
    case "balance":
    case "inquiry":
      return "You can check your account balance through our mobile app or by visiting an ATM.";
    case "mortgage":
      return "For mortgage inquiries, please contact our mortgage department at mortgageteam@bank.com.";
    default:
      return "I'm sorry, I didn't quite catch that. Could you please ask something else?";
  }
}
