import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VerleihService } from 'src/app/services/verleih.service';
import { KategorieService } from 'src/app/services/kategorie.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

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
  users: any;
  selectedClass;
  selectedUser;
  selectedEndDate: any;
  showError = false;
  showDateError = false;
  latestVerleihs;
  isAdmin = false;
  toggleEdit = false;
  kategorien;
  selectedKategorie;
  selectedButton = "detail";

  constructor(private productService: ProductService,
    private authService: AuthService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private verleihService: VerleihService,
    public dialog: MatDialog,
    private kategorieService: KategorieService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getProduct();
    });
    this.userService.getAllKlassen().then(data => this.classes = data);
    this.isAdmin = this.authService.isAdmin();
  }

  getProduct() {
    this.productService.getProductById(this.id).then(data => {
      console.log(data);
      this.product = data;
      this.getKategorie();
    })

    this.verleihService.getLatestVerleih(this.id).then(data => {
      console.log(data);
      this.latestVerleihs = data;
    })
  }

  getKategorie() {
    this.kategorieService.getAllKategorien().then(data => {
      console.log(data);
      this.kategorien = data;
      this.kategorien.sort((a, b) => (a.kategorieId > this.product.produktDto.kategorie.kategorieId) ? 1 : -1);
      this.selectedKategorie = this.kategorien[0].kategorieId;
    })
  }

  changeShape(shape) {
    console.log(shape.value);
    this.selectedKategorie = shape.value;
  }
  ausleihen() {
    this.ausleihenClicked = true;
  }

  pushAusleihen() {
    if (!this.selectedUser || !this.authService.getUser().userId) {
      this.showError = true;
      return;
    } else {
      if (!this.selectedEndDate) {
        var date = new Date();
        date.setDate(date.getDate() + 7);
        this.selectedEndDate = this.formatDate(date);
      } else {
        this.selectedEndDate = this.formatDate(this.selectedEndDate);
      }
      let sendJSON = {
        "startDate": this.formatDate(new Date()),
        "endDate": this.selectedEndDate,
        "hergeborgtVon": {
          "userId": this.authService.getUser().userId
        },
        "produkt": {
          "produktId": this.id
        },
        "user": {
          "userId": this.selectedUser
        }
      };

      console.log(sendJSON)
      this.verleihService.ausleihen(sendJSON).then(data => {
        this.router.navigate(['/products']);
      });
    }

  }

  changeKlasse(event) {
    console.log(event.value)
    this.userService.getUserByKlasse(event.value).then(data => this.users = data);
    this.selectedClass = event.value;
  }

  changeUser(event) {
    console.log(event.value)
    this.selectedUser = event.value;
  }
  formatDate(date) {
    let today = date;
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    let returnFormat = dd + '-' + mm + '-' + yyyy;
    return returnFormat;
  }

  changeRuecknahmeDate(event) {
    if (event.value != null) {
      if (event.value <= new Date()) {
        this.showDateError = true;
      } else {
        this.showDateError = false;
        this.selectedEndDate = event.value;
      }
    }
  }

  zuruecknahme() {
    const dialogRef = this.dialog.open(MyDialog, {
      data: { product: this.product }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.verleihService.doZuruecknahme(this.latestVerleihs.verleihDtoList[0].verleihId, this.authService.getUser().userId).then(data => {
          console.log(data)
          this.ngOnInit();
        });
      }
    });
  }

  changeView(bol) {
    this.toggleEdit = bol;
  }

  editProdukt(bez, inv, kbz, lbz, marke, ser, img, action) {

    let bsp = {
      "produktId": this.product.produktDto.produktId,
      "bezeichnung": bez,
      "inventurnummer": inv,
      "kurzbezeichnung": kbz,
      "langbezeichnung": lbz,
      "marke": marke,
      "seriennummer": ser,
      "kategorie": {
        "kategorieId": this.selectedKategorie
      },
      "foto": this.product.produktDto.foto
    };

    if (img.files[0]) {
      bsp.foto = img.files[0].src;
    }
    console.log(bsp)

    if (action == 'save') {
      this.productService.editProdukt(bsp).then(data => {
        this.getProduct();
        this.toggleEdit = false;
        this.selectedButton = "detail";
      });
    } else if (action == 'lock') {
      this.productService.lockProduct(this.product.produktDto.produktId).then(data => {
        this.getProduct();
        this.toggleEdit = false;
        this.selectedButton = "detail";
      });
    } else if (action == 'delete') {

      const dialogRef = this.dialog.open(MyDeleteDialog, {
        data: { product: this.product }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if (result) {
          this.productService.disableProduct(this.product.produktDto.produktId).then(data => this.router.navigate(['/products']));
        }
      });


    }


  }

  public onValChange(val: string) {
    this.selectedButton = val;
  }
}


@Component({
  selector: 'myDialog',
  templateUrl: 'myDialog.html',
})
export class MyDialog {

  constructor(
    public dialogRef: MatDialogRef<MyDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { console.log(data) }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close(true);
  }

}

@Component({
  selector: 'myDeleteDialog',
  templateUrl: 'MyDeleteDialog.html',
})
export class MyDeleteDialog {

  constructor(
    public dialogRef: MatDialogRef<MyDeleteDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { console.log(data) }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close(true);
  }

}