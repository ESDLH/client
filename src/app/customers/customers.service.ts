import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './model/Customer';
import { CUSTOMER_DATA } from './model/mock-customers';

@Injectable({
    providedIn: 'root'
})

export class CustomersService {

    constructor() { }

    getCustomers(): Observable<Customer[]> {
        return of (CUSTOMER_DATA);
    }

    saveCustomer(customers: Customer): Observable<Customer> {
        return of(null);
    }

    deleteCustomer(idCustomer: number): Observable<any> {
        return of(null);
    }
}
