import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-cookie-consent',
  templateUrl: './home-cookie-consent.component.html',
  styleUrls: ['./home-cookie-consent.component.css']
})
export class HomeCookieConsentComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // console.log('Vue initialisée et DOM prêt');
    this.setupCookieConsent();
  }

  // Fonction pour gérer le consentement aux cookies
  setupCookieConsent(): void {
    const consentPopup = document.getElementById("cookie-consent-popup");
    
    if (!consentPopup) {
      console.error("L'élément #cookie-consent-popup est introuvable.");
      return; // Arrêter l'exécution si l'élément n'existe pas
    }

    // console.log("Popup trouvé :", consentPopup);

    const consentGiven = localStorage.getItem("cookieConsent");
    // console.log("Consentement donné :", consentGiven);

    if (!consentGiven) {
      console.log("Aucun consentement trouvé, affichage du popup.");
      consentPopup.style.display = "block";
    } else {
      // console.log("Consentement déjà donné, pas d'affichage du popup.");
    }

    document.getElementById("accept-cookies")?.addEventListener("click", function () {
      // console.log("Cookies acceptés");
      localStorage.setItem("cookieConsent", "accepted");
      consentPopup.style.display = "none";
    });

    document.getElementById("decline-cookies")?.addEventListener("click", function () {
      console.log("Cookies refusés");
      localStorage.setItem("cookieConsent", "declined");
      consentPopup.style.display = "none";
    });
  }
}
