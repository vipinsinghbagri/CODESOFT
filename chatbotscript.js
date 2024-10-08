const chatbotResponse = document.getElementById("chatbot-response");
const userInputField = document.getElementById("user-input-field");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const userInput = userInputField.value.trim();
    if (userInput !== "") {
        respondToUserInput(userInput); // Fixed: Removed space in function name
        userInputField.value = "";
    }
});

function respondToUserInput(userInput) { // Fixed: Removed space in function name
    let response;
    switch (true) {
        case userInput.toLowerCase() === "hello" || userInput.toLowerCase() === "hi" || userInput.toLowerCase() === "hy":
            response = "Hello i'm Vipin's Chatbot! How can I help you today?";
            break;
         case userInput.toLowerCase() === "vipin" || userInput.toLowerCase() === "where is vipin" || userInput.toLowerCase() === "i want to contact vipin":
            response = "Ok! If you Want to connect with Vipin then Mail here : vipinbagri541@gmail.com";
            break;
        case userInput.toLowerCase() === "bye" || userInput.toLowerCase() === "goodbye":
            response = "Goodbye! It was nice chatting with you..";
            break;
        case userInput.toLowerCase() === "help" || userInput.toLowerCase() === "what can you do":
            response = "I can help you with answering questions, providing information, and more!";
            break;
        default:
            response = "I didn't understand that. Can you please rephrase?";
    }
    chatbotResponse.innerHTML += `<p>You: ${userInput}</p><p>Chatbot: ${response}</p>`;
}
