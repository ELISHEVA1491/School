import { Component, OnInit } from '@angular/core';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  // constructor(private _bottomSheet: MatBottomSheet) {}

  
  openBottomSheet(): void {
    // this._bottomSheet.open(MyBottomSheet);
  }
  ngOnInit(): void {
  }

}

// @Component({
//   selector: 'bottom-sheet',
//   templateUrl: 'bottom-sheet.html',
// })
// export class MyBottomSheet {
//   constructor(private _bottomSheetRef: MatBottomSheetRef<MyBottomSheet>) {}

//   openLink(event: MouseEvent): void {
//     this._bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
// }