document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const feedbackType = document.getElementById('feedbackType').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Get selected rating
            let rating = 0;
            document.querySelectorAll('input[name="rating"]').forEach(input => {
                if (input.checked) {
                    rating = input.value;
                }
            });
            
            // In a real application, this would send data to a server
            // For now, we'll just show a confirmation message
            console.log('Feedback submitted:', {
                name,
                email,
                feedbackType,
                subject,
                message,
                rating
            });
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.style.backgroundColor = '#28a745';
            successMessage.style.color = '#ffffff';
            successMessage.style.padding = '15px';
            successMessage.style.borderRadius = '5px';
            successMessage.style.marginTop = '20px';
            successMessage.style.textAlign = 'center';
            successMessage.innerHTML = '<p>Thank you for your feedback! We appreciate your input.</p>';
            
            // Add success message to the page
            feedbackForm.parentNode.insertBefore(successMessage, feedbackForm.nextSibling);
            
            // Reset form
            feedbackForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
});