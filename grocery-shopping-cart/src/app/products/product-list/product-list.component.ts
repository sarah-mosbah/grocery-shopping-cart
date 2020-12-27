import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoopingCartService } from 'src/app/service/shooping-cart.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  @Input('product') product: Product;

  constructor(private cartService:ShoopingCartService) { }


  addToCart(product: Product){

  let shoppingCart= this.cartService.getOrCreatCart();

  }
}
