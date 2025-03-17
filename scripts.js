document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        alert('Login successful');
    } else {
        alert('Login failed');
    }
});

document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const age = document.getElementById('signup-age').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, age, password })
    });

    if (response.ok) {
        alert('Signup successful');
    } else {
        alert('Signup failed');
    }
});
