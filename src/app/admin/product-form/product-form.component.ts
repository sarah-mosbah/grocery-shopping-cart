import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/models/product';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  id;
  categories$;
  product=new Product();
  constructor(
    private categSer:CategoryService, 
    private productSer: ProductService,
    private route: Router, 
    private actRoute: ActivatedRoute) { 

     this.categSer.getAll().valueChanges().subscribe((list)=>{
      this.categories$=list;
    });

    this.id= this.actRoute.snapshot.paramMap.get('id');

    if(this.id) this.productSer.getProduct(this.id).snapshotChanges().pipe(take(1)).subscribe((p)=>{
      this.product.id=p.key;
      this.product.price=p.payload.val()["price"]; 
      this.product.title=p.payload.val()["title"];
      this.product.imageUrl=p.payload.val()["imageUrl"];
      this.product.category=p.payload.val()["category"];
    });

  //take to unsubscribe
  }

  save(product){
    if(this.id) this.productSer.update(this.id, product);
    else  this.productSer.create(product);
   
    this.route.navigate(['/admin/products']);
  }



  delete(){
    this.productSer.delete(this.id);
    this.route.navigate(['/admin/products']);
  }

}
