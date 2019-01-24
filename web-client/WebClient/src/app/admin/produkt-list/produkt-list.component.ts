import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produkt-list',
  templateUrl: './produkt-list.component.html',
  styleUrls: ['./produkt-list.component.css']
})
export class ProduktListComponent implements OnInit {

  products: any;
  originProducts: any;

  lastStatus: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getAllProducts().then(data => {
      console.log(data)
      this.products = data.produktDtoList;
      this.originProducts = data.produktDtoList;
    })

  }

  changeFilter(status) {
    console.log(status)

    if (this.lastStatus == status) {
      this.products = this.originProducts;
      if (document.getElementById("buttonGreen").classList.contains('active')) {
        console.log("green");
        document.getElementById("buttonGreen").classList.toggle('active');
      }
      if (document.getElementById("buttonOrange").classList.contains('active')) {
        console.log("orange")
        document.getElementById("buttonOrange").classList.remove('active');
      }
      if (document.getElementById("buttonRed").classList.contains('active')) {
        console.log("red")
        document.getElementById("buttonRed").classList.remove('active');
      }

      this.lastStatus = "";


    } else {
      this.products = this.originProducts.filter(produkt => produkt.status == status);
      this.lastStatus = status;
    }

  }
}
