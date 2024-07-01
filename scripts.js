const apiKey = 'votre_clé_api'; // Remplacez par votre propre clé API

function fetchNews() {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=fr&category=entertainment&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('La requête n\'a pas réussi : ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Affiche les données dans la console (pour le débogage)
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; // Nettoyer le contenu précédent
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');

                const title = document.createElement('h3');
                title.textContent = article.title;

                const description = document.createElement('p');
                description.textContent = article.description;

                const link = document.createElement('a');
                link.href = article.url;
                link.textContent = 'Lire l\'article';

                articleElement.appendChild(title);
                articleElement.appendChild(description);
                articleElement.appendChild(link);

                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));
}

// Appeler la fonction fetchNews pour afficher les actualités au chargement de la page
document.addEventListener('DOMContentLoaded', fetchNews);
