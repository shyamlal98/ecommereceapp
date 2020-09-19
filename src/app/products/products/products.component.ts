import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutctDataService } from '../produtct-data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Observable<any>;

  constructor(private produtctDataService: ProdutctDataService) { }

  ngOnInit(): void {
    this.products = this.produtctDataService.getAllProducts();
  }

}
