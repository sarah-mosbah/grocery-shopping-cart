import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

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


 async getOrCreatCart(){
    let cartId=localStorage.getItem('cartId');

    console.log(cartId);
    if (!cartId){
     cartId=await this.create().path.pieces_[1];
     localStorage.setItem('cartId',cartId);
     console.log("hello"+cartId);
    }
    return this.getCart(cartId);
  }
 private getCart(cartId: string) {
    return this.db.object(`/shopping-carts/${cartId}`);
  }
}
