document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const result = await response.json();
        
        if (result.success) {
            window.location.href = '/dashboard'; // Redirect to a dashboard page on success
        } else {
            document.getElementById('error-message').innerText = result.message;
        }
    } catch (error) {
        document.getElementById('error-message').innerText = 'An error occurred. Please try again later.';
    }
});