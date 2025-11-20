document.addEventListener('DOMContentLoaded', () => {
    console.log('Navabharath Technologies website loaded');

    // Mobile menu toggle (if needed in future)
    // Form submission handler (mock)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully! (Mock)');
            form.reset();
        });
    }
});
