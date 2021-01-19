import {NgModule } from  '@angular/core';
import {MatNativeDateModule} from  '@angular/material/core';
import {MatIconModule} from  '@angular/material/icon';
import {MatButtonModule} from  '@angular/material/button';
import {MatCheckboxModule} from  '@angular/material/checkbox';
import {MatToolbarModule} from  '@angular/material/toolbar';
import {MatCardModule} from  '@angular/material/card';
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import {MatRadioModule} from  '@angular/material/radio';
import {MatListModule} from  '@angular/material/list';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
// import {MatDialogModule} from '@angular/material/dialog';
// import * as MATERIAL_MODULES from '@angular/material';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTreeModule} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

import {OverlayModule} from '@angular/cdk/overlay';



// import {MAT_DIALOG_DATA} from '@angular/material/dialog';




@NgModule({
imports: [MatNativeDateModule,MatTabsModule,A11yModule,ClipboardModule,DragDropModule,
    MatDatepickerModule,PortalModule,
    // MatBottomSheet,
    OverlayModule,
    MatIconModule,
    MatButtonModule,
    // MatBottomSheetRef,
    MatCheckboxModule,MatPaginatorModule,MatTableModule,MatRippleModule,MatTooltipModule,
     MatToolbarModule,MatAutocompleteModule,
     MatBottomSheetModule,
     MatBadgeModule,MatDialogModule,ScrollingModule,
     MatExpansionModule,MatButtonToggleModule,
     FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSelectModule],
 
exports: [MatNativeDateModule,ScrollingModule,A11yModule,PortalModule,ClipboardModule,MatDialogModule,DragDropModule,FormsModule,MatExpansionModule,MatBadgeModule,MatRippleModule,MatTooltipModule,
MatDatepickerModule,MatIconModule,
MatBottomSheetRef,
MatButtonModule,MatAutocompleteModule,MatCheckboxModule,
MatBottomSheet,
MatBottomSheetModule,
 MatToolbarModule, 
MatCardModule,MatFormFieldModule,MatTabsModule,MatInputModule,MatListModule,MatRadioModule,OverlayModule,
MatTableModule, MatPaginatorModule,MatInputModule,MatSelectModule,MatButtonToggleModule],
})
 
export  class  MyMaterialModule { }