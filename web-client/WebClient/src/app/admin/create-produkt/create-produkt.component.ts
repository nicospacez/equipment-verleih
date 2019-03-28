import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { KategorieService } from 'src/app/services/kategorie.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

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

  private base64textString: String = "";

  constructor(private productService: ProductService, private kategorieService: KategorieService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.kategorieService.getAllKategorien().then(data => {
      console.log(data);
      this.kategorien = data;
      this.kategorienCSV = this.kategorien;
    })
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  uploadFileToActivity() {
    this.productService.uploadCSV(this.base64textString, this.selectedKategorieCSV).then(data => {


      let json = { product: null, fail: !data };


      const dialogRef = this.dialog.open(MyProduktDialog, {
        data: json
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if (!json.fail) {
          this.router.navigate(['/products']);
        }

      });

    });

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

  createProdukt(bez, inv, kbz, lbz, marke, ser, img) {

    let bsp = {
      "bezeichnung": bez,
      "inventurnummer": inv,
      "kurzbezeichnung": kbz,
      "langbezeichnung": lbz,
      "marke": marke,
      "seriennummer": ser,
      "kategorie": {
        "kategorieId": this.selectedKategorie
      },
      "foto": ""
    };

    if (img.files[0]) {
      bsp.foto = img.files[0].src;
    }





    console.log(bsp)
    this.productService.createProdukt(bsp).then(data => {
      console.log(data)

      let json = { product: bez, fail: !data };


      const dialogRef = this.dialog.open(MyProduktDialog, {
        data: json
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if (!json.fail) {
          this.router.navigate(['/products']);
        }
      });
    });
  }
  createKategorie(bezeichnung) {
    if (bezeichnung.length == 0) return;
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

    const dialogRef = this.dialog.open(MyDialog2, {
      data: { product: bezeichnung }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.ngOnInit();
    });

  }

  flinput() {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
      var label = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
          fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
          fileName = e.target.value.split('\\').pop();

        if (fileName)
          label.querySelector('span').innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
    });
  }

}



@Component({
  selector: 'myDialog',
  templateUrl: 'myDialog2.html',
})
export class MyDialog2 {

  constructor(
    public dialogRef: MatDialogRef<MyDialog2>, @Inject(MAT_DIALOG_DATA) public data: any) { console.log(data) }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close(true);
  }

}

@Component({
  selector: 'MyProduktDialog',
  templateUrl: 'MyProduktDialog.html',
})
export class MyProduktDialog {

  constructor(
    public dialogRef: MatDialogRef<MyProduktDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { console.log(data) }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close(true);
  }

}
