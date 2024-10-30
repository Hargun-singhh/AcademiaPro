const faqs = {
    "hello": "Hi there! How can I assist you?",
    "hi": "Hello! How can I help you today?",
    "how to apply dl": "To apply for DL (Duty Leave), visit the student portal, navigate to the 'Leave Application' section, and fill out the required details. Submit the application and wait for approval.",
    "how to see attendance": "You can view your attendance on the student portal. Go to the 'Attendance' section, where you’ll find your attendance records organized by subject and date.",
    "how to apply gatepass": "To apply for a gate pass, log into the student portal, find the 'Gate Pass' section, and submit your request. You'll receive an approval notification if your request is accepted.",
    "where can i see my marks": "Your marks are available on the student portal under the 'Grades' or 'Marks' section. Check there to see your latest results and assessments.",
    "how to pay fine": "To pay any fines, go to the 'Payments' section of the student portal. You can view outstanding fines and pay them online using the payment methods provided.",
    "how to pay fees": "To pay your fees, log into the student portal, navigate to the 'Fee Payment' section, and select your preferred payment method. You'll receive a confirmation once the payment is successful."
};

function initializeChat() {
    // Automatically send a welcome message
    addMessage("Hi there! I'm here to help you. You can ask me about applying for DL, checking attendance, applying for a gate pass, viewing marks, and paying fines and Fees.", 'bot');
}

function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === '' 
        ? 'block' 
        : 'none';

    if (chatContainer.style.display === 'block') {
        document.getElementById('userInput').focus();
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim().toLowerCase();
    
    if (message === '') return;

    addMessage(input.value, 'user');

    const response = getBotResponse(message);
    setTimeout(() => addMessage(response, 'bot'), 500);

    input.value = '';
}

function getBotResponse(message) {
    if (faqs[message]) return faqs[message];

    for (let key in faqs) {
        if (message.includes(key)) return faqs[key];
    }

    return "I'm sorry, I didn't understand that. Please try asking about how to apply for DL, see attendance, apply for a gate pass, check marks, or pay fines and fees.";
}

function addMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Automatically initialize chat with a welcome message on page load
document.addEventListener("DOMContentLoaded", initializeChat);

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
