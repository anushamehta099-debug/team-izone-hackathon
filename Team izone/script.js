document.addEventListener('DOMContentLoaded', () => {
    const ratingModal = document.getElementById('rating-modal');
    const stars = document.querySelectorAll('.stars i');
    const submitItemBtn = document.querySelector('[data-action="submit-item"]');
    
    // --- Mock User/Login State ---
    // This variable would be set upon actual login
    let userRole = 'Customer'; // Simulating a Customer login for the rating popup test

    // --- Customer App Rating Popup Logic ---
    if (userRole === 'Customer') {
        // Mocking the 'after service use' experience for the rating popup
        setTimeout(() => {
            // Check if the modal exists before trying to show it
            if(ratingModal) {
                 ratingModal.classList.remove('hidden');
            }
        }, 1500); // Show popup 1.5s after page load for demonstration
    }

    // Star Rating Interactivity (Mock)
    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const ratingValue = this.getAttribute('data-value');
                stars.forEach(s => {
                    s.classList.remove('rated');
                    if (s.getAttribute('data-value') <= ratingValue) {
                        s.classList.add('rated');
                    }
                });
                console.log(`User rated the app: ${ratingValue} stars.`);
            });
        });

        // Close Modal/Submit Rating (Mock)
        document.getElementById('submitRating').addEventListener('click', () => {
            ratingModal.classList.add('hidden');
            alert('Thank you for your feedback!');
        });
    }

    // --- Action Button Handlers (Simulate Form/Login redirection) ---
    const allActionButtons = document.querySelectorAll('[data-action], .service-card button, .btn-signup');
    
    allActionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.currentTarget.getAttribute('data-action') || e.currentTarget.textContent;
            
            if (action.includes('Repair now') || action.includes('submit-item')) {
                window.location.href = 'Customer Request Page.html';
            } else if (action.includes('Repair Service') || action.includes('Job Request') || action.includes('Sign Up')) {
                window.location.href = 'Applicant Registration Page.html';
            }
        });
    });

});