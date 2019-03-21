import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { KategorieService } from 'src/app/services/kategorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-produkt',
  templateUrl: './create-produkt.component.html',
  styleUrls: ['./create-produkt.component.css']
})
export class CreateProduktComponent implements OnInit {

  kategorien;
  kategorienCSV;
  selectedKategorie;
  selectedKategorieCSV;
  selectedUeberkategorie;

  fileToUpload: File = null;

  constructor(private productService: ProductService, private kategorieService: KategorieService, private router: Router) { }

  ngOnInit() {
    this.kategorieService.getAllProdukte().then(data => {
      console.log(data);
      this.kategorien = data;
      this.kategorienCSV = this.kategorien;
    })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)
  }

  uploadFileToActivity() {
    this.productService.uploadCSV(this.fileToUpload, this.selectedKategorieCSV);
  }

  changeShape(shape) {
    console.log(shape.value);
    this.selectedKategorie = shape.value;
  }
  
  changeKategorieCSV(shape) {
    console.log(shape.value);
    this.selectedKategorieCSV = shape.value;
  }

  changeUeberKategorie(shape) {
    console.log(shape.value);
    this.selectedUeberkategorie = shape.value;
  }

  createProdukt(bez, inv, kbz, lbz, marke, ser) {
    let bsp = {
      "bezeichnung": bez,
      "inventurnummer": inv,
      "kurzbezeichnung": kbz,
      "langbezeichnung": lbz,
      "marke": marke,
      "seriennummer": ser,
      "kategorie": {
        "kategorieId": this.selectedKategorie
      }
    };
    console.log(bsp)
    this.productService.createProdukt(bsp);
    alert("Produkt hinzugefügt");
    location.reload();
  }
  createKategorie(bezeichnung) {
    let arr = {};
    if (this.selectedUeberkategorie != null) {
      arr = {
        "kurzbezeichnung": bezeichnung,
        "kategorie": {
          "kategorieId": this.selectedUeberkategorie
        }
      }
    } else {
      arr = {
        "kurzbezeichnung": bezeichnung,
      }
    }
    console.log(arr)
    this.kategorieService.createKategorie(arr);
    alert("Kategorie   hinzugefügt");
    location.reload();
  }
}



