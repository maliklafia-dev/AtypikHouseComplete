// src/app/components/stripe-checkout/stripe-checkout.component.ts
import { Component, OnInit } from '@angular/core';
import { StripeService } from '../../services/stripe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.css'],
})
export class StripeCheckoutComponent implements OnInit {
  loading = false;
  errorMessage: string | null = null;
  amount: number = 0;
  habitatName: string = 'Réservation'; // Nom par défaut en cas d'absence de données

  constructor(
    private stripeService: StripeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer le montant et le nom de l'habitat depuis les paramètres de requête
    this.route.queryParams.subscribe(params => {
      this.amount = +params['amount'] || 0; // Montant en dollars (ou devise choisie)
      this.habitatName = params['habitatName'] || this.habitatName; // Utiliser le nom de l'habitat s'il est fourni
    });
  }

  // Méthode pour initier le paiement Stripe
  startCheckout(): void {
    this.loading = true;
    this.errorMessage = null;

    // Définir les articles de ligne pour Stripe Checkout
    const lineItems = [
      {
        price_data: {
          currency: 'usd', // Adapter la devise si nécessaire
          product_data: {
            name: this.habitatName,
          },
          unit_amount: this.amount * 100, // Montant en cents
        },
        quantity: 1,
      },
    ];

    // Définir les URL de redirection en cas de succès ou d'annulation
    const successUrl = `${window.location.origin}/reservation-confirmation`; // URL après succès
    const cancelUrl = `${window.location.origin}/cancel`; // URL après annulation

    this.stripeService.createCheckoutSession(lineItems, successUrl, cancelUrl).subscribe(
      (response: { url: string }) => {
        this.loading = false;
        if (response && response.url) {
          // Rediriger vers la page Stripe Checkout avec l'URL fournie
          window.location.href = response.url;
        } else {
          this.errorMessage = 'Échec de la création de la session de paiement Stripe.';
        }
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Erreur lors de la création de la session de paiement.';
        console.error('Erreur:', error);
      }
    );
  }
}
