import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '../models/product';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[]=[];
  categories=[];
  filterdProducts:Product[]=[];
  catergory;
  constructor(private prodService: ProductService,
              private categoryService:CategoryService,
              private route: ActivatedRoute
              ) {
    this.prodService.getAll().stateChanges().pipe(switchMap(m=>{
 
      this.products.push({
        imageUrl: m.payload.val()["imageUrl"],
        title: m.payload.val()["title"],
        category: m.payload.val()["category"],
        price: m.payload.val()["price"],
        id:m.key
      });

      return this.route.queryParamMap;
   })).subscribe(params=>{
    this.catergory=params.get('category');
    this.filterdProducts= this.catergory ? this.products
                                  .filter(a=>a.category===this.catergory) : this.products;
   });

   this.categoryService.getAll().stateChanges().subscribe((m)=>{
    this.categories.push({
      name: m.payload.val()["name"],
      id:m.key
    });
   });
  }

}
