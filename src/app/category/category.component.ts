import { Component,Input, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from 'src/models/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public categoryService:CategoryService){}

  categorys : Category[] = [];

  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe((response: any) => {
      this.categorys = response.data.lstCategory
      // console.log(this.categorys)
  });
  }
}

