import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 


  constructor(private db: AngularFireDatabase) { }


  create(product){
    this.db.list('/products').push(product);
  }


  getAll(){
  return  this.db.list('/products');
  }


  getProduct(id:string){
    return  this.db.object(`/products/${id}`);
  }


  update(productId, product) {
    this.db.object(`/products/${productId}`).update(product);
  }

  delete(productId){
    return this.db.object(`/products/${productId}`).remove();
  }

}
