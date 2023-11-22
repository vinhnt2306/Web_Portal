import { Component,Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from 'src/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[] = [];
  currentProducts: Product[] = []; // Danh sách sản phẩm ở trang hiện tại
  pageSize: number = 8; // Số sản phẩm mỗi trang
  currentPage: number = 1; // Trang hiện tại
  totalPages: number = 1; // Tổng số trang


  constructor(public productService:ProductService){}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.productService.getAllProduct().subscribe((response: any) => {
      this.products = response.data.lstProduct
      // console.log(this.products)
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
      this.updateCurrentProducts();
  });
  }
  // Cập nhật danh sách sản phẩm ở trang hiện tại
  updateCurrentProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.currentProducts = this.products.slice(startIndex, endIndex);
  }

  // Cập nhật số trang và danh sách sản phẩm khi số sản phẩm trên mỗi trang thay đổi
  updatePageSize(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.products.length / this.pageSize);
    this.updateCurrentProducts();
  }

  // Chuyển đến trang trước đó
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateCurrentProducts();
    }
  }

  // Chuyển đến trang kế tiếp
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateCurrentProducts();
    }
  }
}
