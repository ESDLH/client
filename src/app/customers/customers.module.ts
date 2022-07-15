import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';



@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersEditComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    {
        provide: MAT_DIALOG_DATA,
        useValue: {},
    },
  ]
})

export class CustomersModule { }
