// category-item.component.ts
import { Component, Input,  EventEmitter, Output  } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css']
})
export class CatItemComponent {
  @Input() category: any;

  constructor(private router: Router) {}

  onCategoryClick(category: string): void {
    console.log("categorie cliquée")
    this.router.navigate(['/appartements'], { queryParams: { category } });
  }
}

