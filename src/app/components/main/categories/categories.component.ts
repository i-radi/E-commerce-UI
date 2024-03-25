import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent {
  categories: Category[] = [];
  constructor(private _categoriesService:CategoriesService){}

  ngOnInit(): void {
    this._categoriesService.getall().subscribe({
      next:(res) => this.categories = res.data
    });
  }
}
