import { Component } from '@angular/core';
import { Brand } from 'src/app/interfaces/brand';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.sass']
})
export class BrandsComponent {

  brands: Brand[] = [];
  constructor(private _brandsService:BrandsService){}

  ngOnInit(): void {
    this._brandsService.getall().subscribe({
      next:(res) => this.brands = res.data
    });
  }
}
