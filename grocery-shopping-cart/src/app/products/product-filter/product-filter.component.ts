import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnDestroy{

  categories=[];
  subscription: Subscription;
  constructor(private categSer:CategoryService) {
    this.categSer.getAll().stateChanges().subscribe((m)=>{
      this.categories.push({
        name: m.payload.val()["name"],
        id:m.key
      });
     });
     this.subscription=new Subscription();
   }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  

}
