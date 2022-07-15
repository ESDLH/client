import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Customer } from '../model/Customer';
import { CustomersService } from '../customers.service';
import { CustomersEditComponent } from '../customers-edit/customers-edit.component';

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

    createCustomer() {
        const dialogRef = this.dialog.open(CustomersEditComponent, {
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
}
