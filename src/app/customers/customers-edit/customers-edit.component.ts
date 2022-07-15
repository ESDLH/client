import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomersService } from '../customers.service';
import { Customer } from '../model/Customer';

@Component({
    selector: 'app-customers-edit',
    templateUrl: './customers-edit.component.html',
    styleUrls: ['./customers-edit.component.scss']
})

export class CustomersEditComponent implements OnInit {

    customer: Customer;
  
    constructor(
        public dialogRef: MatDialogRef<CustomersEditComponent>,
        private customersService: CustomersService
    ) { }

    ngOnInit(): void {
        this.customer = new Customer();
    }

    /**
     * Guarda un nuevo cliente o la modificación
     * de un cliente existente.
     */
    onSave() {
        this.customersService.saveCustomer(this.customer).subscribe(result => {
            this.dialogRef.close();
        })
    }

    /**
     * Cierra el cuadro de diálogo.
     */
    onClose() {
        this.dialogRef.close();
    }

}
