import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'; // Import the service
import { Category } from '../../../../models/category.model'; // Import the model

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  categories: Category[] = []; // All categories fetched from the service
  filteredThreeCategories: Category[] = []; // Filtered categories to display
  searchTerm: string = ''; // To store the search input

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  // Fetch all categories
  fetchCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        // Assuming the API returns categories in 'hydra:member'
        this.categories = data['hydra:member'] || [];
        this.filteredThreeCategory(); // Filter the first three categories after fetching
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Filter and return the first three categories
  filteredThreeCategory(): void {
    this.filteredThreeCategories = this.categories.slice(0, 3);
  }

  // Function to filter the categories as user types in the search box
  onSearch(): void {
    const searchTermLower = this.searchTerm.toLowerCase();
    const filteredCategories = this.categories.filter((category) =>
      category.title.toLowerCase().includes(searchTermLower) ||
      (category.description && category.description.toLowerCase().includes(searchTermLower)) // Vérifie si la description existe
    );
    this.filteredThreeCategories = filteredCategories.slice(0, 3); // Limite à 3 résultats
  }


}
