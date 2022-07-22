import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { Loan } from './model/Loan';
import { LoanPage } from './model/LoanPage';
import { LOAN_DATA } from './model/mock-loans';

@Injectable({
    providedIn: 'root'
})

export class LoanService {

    constructor() { }

    /**
     * Obtiene los préstamos de juegos realizados.
     * 
     * @param pageable Objeto Angular Pageable. Permite
     *                 paginar los datos.
     * @returns Listado por páginas de los préstamos.
     */
    getLoans(pageable : Pageable) : Observable<LoanPage> {
        return of(LOAN_DATA);
    }

    /**
     * Guarda un préstamo en la base de datos.
     * @param loan Préstamo a guardar.
     */
    saveLoan(loan: Loan): Observable<void> {
        return of(null);
    }

    /**
     * Borra un préstamo de la base de datos.
     * @param idLoan Id del préstamo a borrar.
     */
    deleteLoan(idLoan: number): Observable<void> {
        return of(null);
    }
}
