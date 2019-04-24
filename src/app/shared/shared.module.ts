import { DirectiveModule } from './../directive/directive.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatInputModule,
    MatCardModule,
     MatFormFieldModule,
     MatListModule,
     MatSlideToggleModule,
     MatGridListModule,
     MatDialogModule,
     MatAutocompleteModule,
     MatMenuModule,
     MatCheckboxModule,
     MatRadioModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatSelectModule,
     MatSidenavModule,
    } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';

@NgModule({
  declarations: [ConfirmDialogComponent, ImageListSelectComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSidenavModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    ImageListSelectComponent
  ],
  entryComponents:[
    ConfirmDialogComponent
  ],

})
export class SharedModule { }
