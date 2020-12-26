import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  prods$: Product[];
  subscribtion: Subscription;
  filteredProducts: Product[];


  constructor(private productSer: ProductService) { 
    this.subscribtion=new Subscription();
    this.prods$=[];
  }


  ngOnInit(): void {
    this.productSer.getAll().stateChanges().subscribe(m=>{
      this.prods$.push({
        imageUrl: m.payload.val()["imageUrl"],
        title: m.payload.val()["title"],
        category: m.payload.val()["category"],
        price: m.payload.val()["price"],
        id:m.key
      });
      this.filteredProducts=this.prods$;
   });
  }

  filter(query: string){
  this.filteredProducts=(query) ? 
   this.prods$.filter(p=>(p["title"] as string).toLowerCase().includes(query.toLowerCase()))
   : this.prods$;
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
