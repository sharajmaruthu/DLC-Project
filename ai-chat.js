document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    const suggestedQuestions = document.querySelectorAll('.question-btn');
    
    // Add event listener for send button
    sendMessage.addEventListener('click', function() {
        sendUserMessage();
    });
    
    // Add event listener for Enter key
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    // Add event listeners for suggested questions
    suggestedQuestions.forEach(button => {
        button.addEventListener('click', function() {
            userInput.value = this.textContent;
            sendUserMessage();
        });
    });
    
    // Function to send user message
    function sendUserMessage() {
        const message = userInput.value.trim();
        
        if (message) {
            // Add user message to chat
            addMessageToChat('user', message);
            
            // Clear input field
            userInput.value = '';
            
            // Show typing indicator
            addTypingIndicator();
            
            // Simulate response delay
            setTimeout(() => {
                getBotResponse(message);
            }, 1000);
        }
    }
    
    // Function to add message to chat
    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        
        const avatar = document.createElement('div');
        avatar.classList.add('message-avatar');
        
        const icon = document.createElement('i');
        icon.classList.add('fas', sender === 'user' ? 'fa-user' : 'fa-robot');
        avatar.appendChild(icon);
        
        const content = document.createElement('div');
        content.classList.add('message-content');
        
        const text = document.createElement('p');
        text.textContent = message;
        content.appendChild(text);
        
        messageElement.appendChild(avatar);
        messageElement.appendChild(content);
        
        chatBox.appendChild(messageElement);
        
        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    // Function to add typing indicator
    function addTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.classList.add('chat-message', 'ai', 'typing-indicator');
        
        const avatar = document.createElement('div');
        avatar.classList.add('message-avatar');
        
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-robot');
        avatar.appendChild(icon);
        
        const content = document.createElement('div');
        content.classList.add('message-content');
        
        const text = document.createElement('p');
        text.textContent = 'Typing...';
        content.appendChild(text);
        
        typingElement.appendChild(avatar);
        typingElement.appendChild(content);
        
        chatBox.appendChild(typingElement);
        
        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
        
        return typingElement;
    }
    
    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = chatBox.querySelector('.typing-indicator');
        if (typingIndicator) {
            chatBox.removeChild(typingIndicator);
        }
    }
    
    // Function to get bot response
    function getBotResponse(message) {
        // Simulated responses based on common digital literacy questions
        removeTypingIndicator();
        
        // Simple keyword-based responses
        let response;
        message = message.toLowerCase();
        
        if (message.includes('whatsapp') && message.includes('call')) {
            response = "To make a WhatsApp video call: \n\n1) Open WhatsApp and go to the chat with the person you want to call. \n2) Tap the video camera icon at the top right. \n3) Wait for the person to answer. \n\nYou can also make group video calls by selecting multiple contacts. Need any more specific details?";
        } else if (message.includes('online banking')) {
            response = "Online banking is a digital service provided by banks that allows you to manage your bank account through the internet. You can check your balance, transfer money, pay bills, and more without visiting a physical bank branch. \n\nTo get started with online banking: \n1) Visit your bank's website \n2) Look for 'Register' or 'Sign Up' \n3) You'll need your account number and personal details \n4) Create login credentials and set up security measures";
        } else if (message.includes('safe online') || message.includes('internet safety')) {
            response = "Here are key tips to stay safe online: \n\n1) Use strong, unique passwords for each account and consider a password manager \n2) Enable two-factor authentication whenever possible \n3) Be cautious of suspicious emails or messages that ask for personal information \n4) Keep your software and apps updated \n5) Only shop on secure websites (look for https:// in the URL) \n6) Be careful what you share on social media \n7) Use antivirus software and keep it updated";
        } else if (message.includes('paytm')) {
            response = "Paytm is a digital payment platform. To use it: \n\n1) Download the Paytm app from your app store \n2) Register with your phone number and email \n3) Complete KYC verification for full access \n4) Add money to your wallet or link your bank account \n5) Use the app to pay bills, send money, or pay at stores by scanning QR codes \n\nPaytm also offers features like bill payments, movie tickets, travel bookings, and more.";
        } else if (message.includes('google maps')) {
            response = "Google Maps is a navigation app. Here's how to use it: \n\n1) Open the app and tap the search bar \n2) Enter a destination or use voice search \n3) Tap 'Directions' \n4) Choose your mode of transportation (walking, driving, public transit, etc.) \n5) Tap 'Start' to begin navigation with voice guidance \n\nAdditional features include saving favorite locations, exploring nearby places, and viewing real-time traffic updates.";
        } else if (message.includes('email')) {
            response = "To create an email account: \n\n1) Go to a provider like Gmail (gmail.com) or Outlook (outlook.com) \n2) Click 'Create Account' or 'Sign Up' \n3) Fill in your personal information \n4) Choose a username (your email address) and password \n5) Follow the verification steps to complete your account setup \n\nOnce set up, you can send emails by clicking 'Compose' or 'New Email', entering the recipient's address, subject, and message, then clicking 'Send'.";
        } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            response = "Hello! I'm DigiBuddy, your digital literacy assistant. How can I help you learn about technology today? Feel free to ask about apps like WhatsApp, Paytm, Google Maps, or topics like online banking, email, or internet safety.";
        } else if (message.includes('uber') || message.includes('ola') || message.includes('ride')) {
            response = "To book a ride using apps like Uber: \n\n1) Download and install the Uber app \n2) Create an account with your email and phone number \n3) Add a payment method (credit/debit card or UPI) \n4) Enter your destination in the 'Where to?' field \n5) Choose the type of ride you want (UberX, Uber Pool, etc.) \n6) Confirm your pickup location \n7) Tap 'Request Uber' and wait for a driver to accept \n\nYou can track your driver's arrival in real-time and share your trip details with friends for safety.";
        } else if (message.includes('password') || message.includes('strong password')) {
            response = "Tips for creating strong passwords: \n\n1) Use at least 12 characters \n2) Include uppercase and lowercase letters, numbers, and special characters \n3) Don't use personal information (birthdays, names, etc.) \n4) Avoid common words or sequences \n5) Use a different password for each account \n6) Consider using a password manager to generate and store complex passwords securely \n\nA good strategy is to create a passphrase of random words with numbers and symbols mixed in.";
        } else if (message.includes('facebook') || message.includes('privacy') && message.includes('social media')) {
            response = "To protect your privacy on Facebook: \n\n1) Review and set your privacy settings by going to Settings & Privacy > Privacy Settings \n2) Be selective about friend requests and what you share publicly \n3) Limit who can see your posts (Public, Friends, or Custom) \n4) Review your profile from a public perspective \n5) Control app permissions and third-party access \n6) Use the Privacy Checkup tool \n7) Manage your activity log and delete unwanted content \n8) Be careful about the personal information you share";
        } else if (message.includes('two-factor') || message.includes('2fa') || message.includes('two factor')) {
            response = "Two-factor authentication (2FA) adds an extra layer of security to your accounts beyond just a password. Here's how it works: \n\n1) You enter your username and password \n2) The service then requests a second verification method, such as: \n   - A code sent via SMS to your phone \n   - A code from an authenticator app (like Google Authenticator) \n   - A security key you insert into your device \n   - A biometric verification (fingerprint or face scan) \n\nTo set up 2FA, go to the security settings of your accounts (Google, Facebook, banking, etc.) and look for 'two-factor authentication' or 'two-step verification'. It's highly recommended for all important accounts!";
        } else if (message.includes('shop online') || message.includes('shopping online') || message.includes('online shopping')) {
            response = "Tips for safe online shopping: \n\n1) Only use secure websites (look for https:// and a padlock icon in the address bar) \n2) Shop from reputable retailers you know and trust \n3) Use strong, unique passwords for your shopping accounts \n4) Consider using a credit card instead of a debit card for better fraud protection \n5) Be wary of deals that seem too good to be true \n6) Read reviews before buying from unfamiliar sites \n7) Never shop on public WiFi without using a VPN \n8) Check your statements regularly for unauthorized charges \n9) Be cautious of emails claiming to be from retailers - go directly to the site instead of clicking links";
        } else if (message.includes('scam') || message.includes('fraud')) {
            response = "How to avoid online scams: \n\n1) Be skeptical of unsolicited communications (emails, calls, texts) \n2) Don't click on links or download attachments from unknown senders \n3) Be wary of urgency tactics (\"Act now or your account will be closed!\") \n4) Check for poor grammar and spelling in communications \n5) Never share personal or financial information via email \n6) Research unfamiliar companies before doing business with them \n7) Use secure payment methods that offer buyer protection \n8) If someone requests payment by gift cards, wire transfer, or cryptocurrency, it's likely a scam \n9) When in doubt, contact the company directly using their official contact information";
        } else if (message.includes('vpn')) {
            response = "A VPN (Virtual Private Network) helps protect your online privacy and security by: \n\n1) Encrypting your internet connection, making your data unreadable to others \n2) Hiding your IP address and location \n3) Preventing your internet service provider from seeing your browsing activity \n\nTo use a VPN: \n1) Choose a reputable VPN service (some popular options include NordVPN, ExpressVPN, or Surfshark) \n2) Download and install their app on your device \n3) Open the app and sign in \n4) Select a server location (country) to connect to \n5) Click connect and wait for confirmation \n\nVPNs are especially important when using public WiFi networks in places like cafes, airports, or hotels.";
        } else if (message.includes('smartphone') && message.includes('secure')) {
            response = "Tips to keep your smartphone secure: \n\n1) Set a strong screen lock (PIN, pattern, password, or biometric) \n2) Keep your operating system and apps updated \n3) Only download apps from official stores (Google Play, App Store) \n4) Review app permissions carefully before granting them \n5) Enable remote tracking and wiping features (Find My iPhone, Find My Device) \n6) Use two-factor authentication for important accounts \n7) Be cautious about what networks you connect to \n8) Back up your data regularly \n9) Install a security app if using Android \n10) Be careful about clicking links in texts or emails";
        } else {
            response = "I'm here to help with your digital literacy questions. You can ask me about using apps like WhatsApp, Paytm, Google Maps, or about online banking, email, internet safety, social media, creating strong passwords, avoiding scams, shopping online safely, and more! What specific technology would you like to learn about today?";
        }
        
        addMessageToChat('ai', response);
    }
});