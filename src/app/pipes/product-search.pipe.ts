import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products:Product[], searchTerm:string): Product[]  {
    return products.filter((p)=> p.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
