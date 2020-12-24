import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;

  

  constructor(
    private categSer:CategoryService, 
    private productSer: ProductService,
    private route: Router) { 
     this.categSer.getCategories().valueChanges().subscribe((list)=>{
      this.categories$=list;
    });
  }
 
  save(product){
    this.productSer.create(product);
    this.route.navigate(['/admin/products']);
  }

}
