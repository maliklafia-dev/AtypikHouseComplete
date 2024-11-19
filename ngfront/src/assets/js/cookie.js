console.log("Bonjour");
document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM chargé");

  // Vérifier la présence de l'élément popup
  const consentPopup = document.getElementById("cookie-consent-popup");
  if (!consentPopup) {
    // console.error("L'élément #cookie-consent-popup est introuvable.");
    return; // Arrêter l'exécution si l'élément n'existe pas
  }
  // console.log("Popup trouvé :", consentPopup);

  // Vérifier si le consentement a déjà été donné
  const consentGiven = localStorage.getItem("cookieConsent");
  // console.log("Consentement donné :", consentGiven);

  // Afficher le popup si aucun consentement n'a encore été donné
  if (!consentGiven) {
    console.log("Aucun consentement trouvé, affichage du popup.");
    consentPopup.style.display = "block";
  } else {
    // console.log("Consentement déjà donné, pas d'affichage du popup.");
  }

  // Gérer l'acceptation des cookies
  const acceptButton = document.getElementById("accept-cookies");
  if (acceptButton) {
    acceptButton.addEventListener("click", function () {
      // console.log("Cookies acceptés");
      localStorage.setItem("cookieConsent", "accepted");
      consentPopup.style.display = "none"; // Masquer le popup
    });
  } else {
    // console.error("Bouton Accepter introuvable.");
  }

  // Gérer le refus des cookies
  const declineButton = document.getElementById("decline-cookies");
  if (declineButton) {
    declineButton.addEventListener("click", function () {
      console.log("Cookies refusés");
      localStorage.setItem("cookieConsent", "declined");
      consentPopup.style.display = "none"; // Masquer le popup
    });
  } else {
    console.error("Bouton Refuser introuvable.");
  }
});
