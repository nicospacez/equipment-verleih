import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-produkt',
  templateUrl: './create-produkt.component.html',
  styleUrls: ['./create-produkt.component.css']
})
export class CreateProduktComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  createProdukt(bez, inv, kbz, lbz, marke, ser){
    let bsp = {
      "bezeichnung": bez,
      "inventurnummer": inv,
      "kurzbezeichnung": kbz,
      "langbezeichnung": lbz,
      "marke": marke,
      "seriennummer": ser,
      "kategorie": {
        "kategorieId": 1
      }
    };
    console.log(bsp)
    this.productService.createProdukt(bsp);
  }
}

