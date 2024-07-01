document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    
    // Enregistrer le nouvel utilisateur
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    
    if (userExists) {
        alert('Un compte avec cet email existe déjà');
    } else {
        users.push({ email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Compte créé avec succès! Vous pouvez maintenant vous connecter.');
        // Rediriger vers la page de connexion
        window.location.href = 'index.html';
    }
});
