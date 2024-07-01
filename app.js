document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Vérifier les informations de connexion
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert('Connexion réussie!');
        // Rediriger vers la page principale du site
        window.location.href = 'pageprincipale.html';
    } else {
        alert('Email ou mot de passe incorrect');
    }
});