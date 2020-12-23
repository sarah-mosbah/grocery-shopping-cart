import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;

  constructor(private categSer:CategoryService) { 
 this.categSer.getCategories().valueChanges().subscribe((list)=>{
      this.categories$=list;
   });
  }


}
