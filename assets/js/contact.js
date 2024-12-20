document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const serviceID = 'service_74d60fh'; // Replace with your service ID
    const templateID = 'template_795yyvi'; // Replace with your template ID
    const userID = 'vW7Q6P2TmJl2w2avY'; // Replace with your user ID

    const templateParams = {
        to_name: 'Recipient Name',
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    if (templateParams.from_name && templateParams.from_email && templateParams.subject && templateParams.message) {
        // Send email using EmailJS
        emailjs.send(serviceID, templateID, templateParams, userID)
            .then(response => {
                console.log('Email sent successfully!', response);
                document.getElementById('successMessage').classList.remove('hidden');
                this.reset(); // Clear form fields
            })
            .catch(error => {
                console.error('Failed to send email:', error);
                alert('Failed to send the message. Please try again.');
            });
    } else {
        alert('Please fill out all fields.');
    }
});
