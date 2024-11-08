document.getElementById('add-card-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission du formulaire par défaut

  // Récupérer les valeurs du formulaire
  const name = document.getElementById('name').value;
  const hp = document.getElementById('hp').value;
  const type = document.getElementById('type').value;
  const imageFile = document.getElementById('image').files[0]; // Récupérer le fichier d'image

  // Vérifier si un fichier d'image a été sélectionné
  if (!imageFile) {
    alert("Veuillez télécharger une image de la carte.");
    return;
  }

  // Créer une URL pour l'image téléchargée
  const imageUrl = URL.createObjectURL(imageFile);

  // Créer un objet représentant la carte
  const card = {
    name: name,
    hp: hp,
    type: type,
    image: imageUrl
  };

  // Récupérer la collection de cartes depuis localStorage, ou créer un tableau vide si aucune carte n'est enregistrée
  let cards = JSON.parse(localStorage.getItem('cards')) || [];

  // Ajouter la nouvelle carte à la collection
  cards.push(card);

  // Sauvegarder la collection mise à jour dans le localStorage
  localStorage.setItem('cards', JSON.stringify(cards));

  // Rediriger l'utilisateur vers la page de la collection
  window.location.href = 'collection.html';
});