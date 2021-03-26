import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
imports:[
  CommonModule,
  Material.MatMenuModule,
  Material.MatAutocompleteModule,
  Material.MatInputModule,
  Material.MatFormFieldModule,
  Material.MatIconModule,
  Material.MatSortModule,
  Material.MatTableModule,
  Material.MatRadioModule,
  Material.MatGridListModule,
  Material.MatSelectModule,
  Material.MatCheckboxModule,
  Material.MatDatepickerModule,
  Material.MatNativeDateModule,
  Material.MatButtonModule,
  Material.MatSnackBarModule,
  Material.MatPaginatorModule,
  Material.MatToolbarModule,
],
exports:[
  Material.MatSelectModule,
  Material.MatGridListModule,
  Material.MatMenuModule,
  Material.MatCheckboxModule,
  Material.MatAutocompleteModule,
  Material.MatInputModule,
  Material.MatFormFieldModule,
  Material.MatIconModule,
  Material.MatSortModule,
  Material.MatTableModule,
  Material.MatRadioModule,
  Material.MatDatepickerModule,
  Material.MatNativeDateModule,
  Material.MatButtonModule,
  Material.MatSnackBarModule,
  Material.MatPaginatorModule,
  Material.MatToolbarModule,
],
declarations:[]
})

export class MaterialModule{}
