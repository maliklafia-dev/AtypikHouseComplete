document.addEventListener("DOMContentLoaded", () => {
  // Récupérer les éléments du menu hamburger et du menu
  const hamburgerButton = document.querySelector(".header__nav-toggler");
  const column61 = document.querySelector(".column61");

  // Vérification de l'existence des éléments avant d'ajouter les événements
  if (hamburgerButton && column61) {
    hamburgerButton.addEventListener("click", () => {
      console.log("Je clique sur le burger Menu");
      hamburgerButton.classList.toggle("active");
      column61.classList.toggle("active");
      console.log("Classes du bouton:", hamburgerButton.classList);
      console.log("Classes du menu:", column61.classList);
    });
  } else {
    console.error("Erreur : Le bouton hamburger ou le menu est introuvable.");
  }

  // Cacher le menu lorsque l'utilisateur clique sur un lien
  const links = document.querySelectorAll(".link-one15");

  if (links.length > 0) {
    links.forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerButton.classList.remove("active");
        column61.classList.remove("active");
      });
    });
  } else {
    console.error("Erreur : Aucun lien trouvé dans le menu.");
  }

  // Gestion du popup profil
  const profilIcon = document.getElementById("profilIcon");

  if (profilIcon) {
    profilIcon.addEventListener("click", () => {
      const profilContainer = document.getElementById("profilContainer");
      if (profilContainer) {
        profilContainer.classList.toggle("active");
      } else {
        console.error("Erreur : Le conteneur du profil est introuvable.");
      }
    });
  } else {
    console.error("Erreur : L'icône de profil est introuvable.");
  }
});
