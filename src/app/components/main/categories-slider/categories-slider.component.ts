import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoriesService } from 'src/app/services/categories.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.sass'],
})
export class CategoriesSliderComponent implements OnInit {
  categories : Category[] = [];
  constructor(private _categoriesService: CategoriesService) {}
  
  ngOnInit(): void {
      this._categoriesService.getall().subscribe({
        next:(res) => this.categories = res.data
      });
    }

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 7
        }
      },
      nav: true
    }
}
