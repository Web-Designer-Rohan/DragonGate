function toggleForm() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
    
    // Update toggle button text
    const toggleText = document.getElementById('toggleText');
    const imgToggleBtn = document.getElementById('imgToggleBtn');
    
    if(container.classList.contains('active')) {
        toggleText.textContent = 'Sign In';
        imgToggleBtn.textContent = 'Register Now';
    } else {
        toggleText.textContent = 'Sign Up';
        imgToggleBtn.textContent = 'Login Now';
    }
}
