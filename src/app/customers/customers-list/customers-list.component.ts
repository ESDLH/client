import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Customer } from '../model/Customer';
import { CustomersService } from '../customers.service';
import { CustomersEditComponent } from '../customers-edit/customers-edit.component';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.scss']
})

export class CustomersListComponent implements OnInit {

    dataSource = new MatTableDataSource<Customer>();
    displayedColumns: string[] = ['id', 'name', 'action'];

    constructor(
        private customersService: CustomersService,
        public dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.customersService.getCustomers().subscribe (
            customers => this.dataSource.data = customers
        );
    }

    /**
     * Permite crear un nuevo cliente abriendo el cuadro
     * de diálogo vacío.
     */
    createCustomer() {
        const dialogRef = this.dialog.open(CustomersEditComponent, {
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }

    /**
     * Permite modificar un cliente ya existente.
     * 
     * @param customer Customer Datos de un cliente ya existente.
     */
    editCustomer(customer: Customer) {
        const dialogRef = this.dialog.open(CustomersEditComponent, {
            data: { customer: customer }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }

    /**
     * Permite eliminar un cliente.
     * 
     * @param customer Customer Cliente a eliminar.
     */
    deleteCustomer (customer: Customer) {
        const dialogRef = this.dialog.open(DialogConfirmationComponent, {
            data: { title: "Eliminar cliente", description: "Atención: si elimina el cliente, se perderán sus datos.<br>¿Desea eliminar el cliente?" }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.customersService.deleteCustomer(customer.id).subscribe(result => {
                    this.ngOnInit();
                });
            }
        });
    }
}
