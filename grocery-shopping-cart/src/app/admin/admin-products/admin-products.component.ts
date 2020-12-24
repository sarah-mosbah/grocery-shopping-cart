import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  prods$=[];


  constructor(private productSer: ProductService) { }

  ngOnInit(): void {
    this.productSer.getAll().stateChanges().subscribe(m=>{
      this.prods$.push({
        imageUrl: m.payload.val()["imageUrl"],
        title: m.payload.val()["title"],
        category: m.payload.val()["category"],
        price: m.payload.val()["price"],
        id:m.key
      });
    
   });
  }

}
