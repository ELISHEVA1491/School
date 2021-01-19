import { Component, OnInit,Injectable } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
// import {MatDialog} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';


import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'שרה', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'רבקה', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'רחל', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'לאה', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'נחמה', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'רות', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'תמר', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'מירי', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'ציפי', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'נועה', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
// export class DialogContentExample {
//   constructor(public dialog: MatDialog) {}

//   openDialog() {
//     const dialogRef = this.dialog.open(Dialog);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
//   }
// }

// @Component({
//   selector: 'app-teacher',
//   templateUrl: 'ExampleDialogComponent.component.html',
// })
// export class Dialog {}



// export class DialogContentExample {
//   constructor(public dialog: MatDialog) {}

//   openDialog() {
//     const dialogRef = this.dialog.open();

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
    
//   }
// let dialogRef = dialog.open( {
//   height: '400px',
//   width: '600px',
// });



// export class DialogContentExample {
//   constructor(public dialog: MatDialogModule) {}

//   openDialog() {
//     // const dialogRef = this.dialog.open(DialogContentExampleDialog);
//         const dialogRef = this.dialog.open(DialogContentExampleDialog);


//     dialogRef.afterClosed().subscribe((result: any) => {
//       console.log(`Dialog result: ${result}`);
//     });
//     dialogRef.close();
//   }
// }
// export class DialogContentExampleDialog {}

export class TeacherComponent implements OnInit {
  displayedColumns: string[] = ['  שם התלמיד/ה', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  c:String='';
  citot:String[]=['א','ב','ג','ד','ה','ו','ז','ח'];
  misparim:String[]=['1','2','3','4'];

  constructor(public dialog: MatDialogModule) { }


  ngOnInit(): void {
  }
 

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }
  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
    
  }
  openDialog()
  {
      // const Dialog = this.dialog.open(DialogContentExample);

  }
  clearTable() {
    // this.dialog.open(DialogElementsExample)
        // this.dialog.open(DialogElementsExampleDialog);
        this.columnsToDisplay = [];
  }
  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    }
    
  }
  markColumn(cita:String){
    // (color= grin)
        // this.click.nativeElement.style.backgroundColor = '#5789D8';
this.c=cita;
  }



}

