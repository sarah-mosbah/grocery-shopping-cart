import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoopingCartService {

  constructor(private db:AngularFireDatabase) { }

  private create() {
   return this.db.list('/shopping-carts').push({
      creationDate: new Date().getTime()
    });
  }


 async getOrCreatCartId(){
    let cartId=localStorage.getItem('cartId');
    
    if (cartId) return cartId;

    cartId=await this.create().path.pieces_[1];
    localStorage.setItem('cartId',cartId);
    
    return this.getCart(cartId);
  }

  private getCart(cartId: string) {
    return this.db.object(`/shopping-carts/${cartId}`);
  }


 async addToCart(product:Product){
    let cart=await this.getOrCreatCartId();
    let item$= this.db.object(`/shopping-carts/${cart}/items/${product.id}`);

    item$.snapshotChanges().pipe(take(1)).subscribe((item)=>{
      console.log(item);
      if (item.key)  item$.update({quantity: item.payload.val()["quantity"]+1});

      else  item$.set({
        product: product,
        quantity:1
      });
    })
  }
}
