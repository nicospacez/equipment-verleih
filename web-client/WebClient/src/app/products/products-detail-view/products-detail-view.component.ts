import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail-view',
  templateUrl: './products-detail-view.component.html',
  styleUrls: ['./products-detail-view.component.css']
})
export class ProductsDetailViewComponent implements OnInit {

  product: any;
  id: any;
  ausleihenClicked: boolean;
  classes: any;
  selectedClass: string= "xx";
  selectedStudent: string = "xx";
  sendJSON = {
    "startDate": "18-12-2018",
    "endDate": "20-12-2018",
    "hergeborgtVon": {
        "userId": 1
    },
    "zurueckgenommenVon": {
        "userId": 1
    },
    "produkt": {
        "produktId": 2
    },
    "user": {
        "userId": 1
    }
};

  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.getProduct();
    });

  }

  getProduct() {
    this.productService.getProductById(this.id).then(data => {
      console.log(data);
      this.product = data;
    })
  }
  ausleihen() {
    this.ausleihenClicked=true;
  }
  
  pushAusleihen(){
    this.productService.ausleihen(this.sendJSON);
  }
}