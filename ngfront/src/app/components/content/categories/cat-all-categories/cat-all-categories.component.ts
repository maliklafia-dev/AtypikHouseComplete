import { Component } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'; // Import the service
import { Category } from '../../../../models/category.model'; // Import the model

@Component({
  selector: 'app-cat-all-categories',
  templateUrl: './cat-all-categories.component.html',
  styleUrl: './cat-all-categories.component.css'
})
export class CatAllCategoriesComponent {
  moreCategories: Category[] = []; // To store more categories dynamically

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchMoreCategories();
  }

  // Fetch all categories and store the remaining ones as "more categories"
  fetchMoreCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.moreCategories = data['hydra:member'] || []; // Assigner toutes les catégories sans utiliser slice
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  
  
}
