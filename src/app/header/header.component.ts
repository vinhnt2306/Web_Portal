import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';
import { Product } from 'src/models/product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  cartProducts: any[] = [];
  isLoggedIn = false;
  filteredProducts: any[] = [];
  products : Product[] = [];

  constructor(private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    private productService: ProductService) {}

  checkOutShoppingCart() {
    this.router.navigateByUrl("/shopping-cart")
  }

  onLoadCart() {
    this.cartService.getCartItem().subscribe((response: any) => {
      this.cartProducts = response.data.cartItem
      console.log(this.cartProducts)
    })
  }

  ngOnInit(){
    this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
    // this.cartService.getCartItem().subscribe((response: any) => {
    //   this.cartProducts = response.data.cartItem
    //   console.log(this.cartProducts)
    // });
    this.productService.getAllProduct().subscribe((response : any) =>{
      this.products = response.data.lstProduct
    });
  }
  logout() {
    // Xóa token từ localStorage
    localStorage.removeItem('currentUser');

    // Đặt lại trạng thái đăng nhập
    this.isLoggedIn = false;

    // Điều hướng người dùng đến trang đăng nhập
    this.router.navigate(['/login']);
  }
  searchProduct(){
    // Lọc sản phẩm dựa trên từ khóa tìm kiếm
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
