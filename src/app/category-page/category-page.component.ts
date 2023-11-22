import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from 'src/models/category';
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit{

  constructor(public categoryService:CategoryService){}

  categorypages : Category[] = [];

  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe((response: any) => {
      this.categorypages = response.data.lstCategory
      // console.log(this.categorys)
  });
  }
}
