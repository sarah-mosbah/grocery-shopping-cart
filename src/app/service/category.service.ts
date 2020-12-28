import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { 

  }


  getAll(): AngularFireList<object>{
    return this.db.list('/categories',(ref)=>{
      
      return ref.orderByChild('name');
    });
}

}

