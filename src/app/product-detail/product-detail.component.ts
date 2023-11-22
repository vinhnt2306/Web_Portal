import { Component,OnInit,Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from 'src/models/product';
import { Cart } from 'src/models/cart';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()  product!: Product;
  productDetail : Product = new Product;

  carts : Cart[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //Lấy id từ route parameters
    this.route.queryParams.subscribe((params : any) => {
      this.productService.getProductDetailById(params.productId).subscribe(
        (data) => {
          this.productDetail = data.data;
          console.log(data)
        },
        (error) => {
          console.error('Error fetching product details:', error);
          //Xử lý lỗi theo ý bạn
        }
      );
    })
  // // Lấy chuỗi JSON từ localStorage
  // const jsonFromLocalStorage = localStorage.getItem('currentUser');

  // // Kiểm tra nếu chuỗi JSON tồn tại
  // if (jsonFromLocalStorage) {
  //   // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
  //   const parsedData = JSON.parse(jsonFromLocalStorage);

  // // Kiểm tra nếu có giá trị token trong đối tượng
  // if (parsedData && parsedData.data && parsedData.data.token) {
  //   // Lấy giá trị token
  //   const token = parsedData.data.token;
  //   console.log('Token:', token);
  // } else {
  //   console.error('Không tìm thấy giá trị token trong dữ liệu lưu trữ.');
  // }
  // } else {
  //   console.error('Không tìm thấy dữ liệu lưu trữ trong localStorage.');
  // }
}
  //tăng số lượng
  quantity = 1;
  decreaseQuantity() {
  if (this.quantity > 1) {
      this.quantity--;
    }
  }
  increaseQuantity() {
    this.quantity++;
  }
  addToCart(productId : string , quantity : number) {
    this.cartService.addToCart(productId,quantity).subscribe(data => console.log(data))
    console.log(productId,quantity)
  }

}
