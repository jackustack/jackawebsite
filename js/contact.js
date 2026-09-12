const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('contact-submit');
const formStatus = document.getElementById('form-status');

if (!contactForm || !submitButton || !formStatus) {
    throw new Error('Contact form elements not found.');
}

const defaultButtonText = submitButton.textContent.trim();

let isSubmitting = false;

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (isSubmitting) {
        return;
    }

    isSubmitting = true;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';

    formStatus.textContent = '';
    formStatus.classList.remove(
        'form-status-success',
        'form-status-error'
    );

    try {
        const formData = new FormData(contactForm);
        const requestBody = new URLSearchParams();

        for (const [key, value] of formData.entries()) {
            requestBody.append(key, value);
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: requestBody.toString()
        });

        let result = {};

        try {
            result = await response.json();
        } catch {
            result = {};
        }

        if (!response.ok) {
            throw new Error(
                result.error ||
                'Your message could not be sent. Please try again.'
            );
        }

        contactForm.reset();

        if (window.turnstile) {
            window.turnstile.reset();
        }

        formStatus.textContent =
            'Thanks — your message was sent. I’ll review it and get back to you soon.';

        formStatus.classList.add('form-status-success');
        formStatus.focus();

    } catch (error) {
        formStatus.textContent =
            error.message ||
            'Your message could not be sent. Please try again.';

        formStatus.classList.add('form-status-error');

        if (window.turnstile) {
            window.turnstile.reset();
        }

        formStatus.focus();

    } finally {
        isSubmitting = false;
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
    }
});