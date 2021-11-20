import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id:'1',
      name: 'Product 1',
      image:'./assets/images/minion.png',
      price: 1000
    },
    {
      id:'2',
      name:'Product 2',
      image:'./assets/images/jesse.png',
      price:2000
    },
    {
      id:'3',
      name: 'Product 3',
      image:'./assets/images/minion.png',
      price: 4000
    },
    {
      id:'4',
      name:'Product 4',
      image:'./assets/images/jesse.png',
      price:7000
    },
    {
      id:'5',
      name: 'Product 5',
      image:'./assets/images/minion.png',
      price: 9000
    },
    {
      id:'6',
      name:'Product 6',
      image:'./assets/images/computador.png',
      price:12000
    }
      
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
