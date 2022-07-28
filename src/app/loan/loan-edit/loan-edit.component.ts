import { Component, Inject,  OnInit } from '@angular/core';
import { Loan } from '../model/Loan';
import { LoanService } from '../loan.service';
import { Game } from 'src/app/game/model/Game';
import { GameService } from 'src/app/game/game.service';
import { Customer } from 'src/app/customers/model/Customer';
import { CustomersService } from 'src/app/customers/customers.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { DialogMessageComponent } from 'src/app/core/dialog-message/dialog-message.component';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.scss']
})

export class LoanEditComponent implements OnInit {
    
    loan: Loan;
    customers: Customer[];
    games: Game[];

    constructor(
        public dialogRef: MatDialogRef<LoanEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private gameService: GameService,
        private loanService: LoanService,
        private customerService: CustomersService,
        public dialog: MatDialog
        
    ) { }

    ngOnInit(): void {
        this.loan = new Loan();
        
        this.customerService.getCustomers().subscribe(
            customers => this.customers = customers
        );

        this.gameService.getGames().subscribe(
            games => this.games = games
        );
    }

    onSave() {

        var final_date = Math.abs((this.loan.loan_date.getTime() - this.loan.end_date.getTime())) / (1000 * 3600 * 24);

        if (this.loan.end_date < this.loan.loan_date){

            const dialogRef = this.dialog.open(DialogMessageComponent, {
                data: { title: "Error en fecha final préstamo",
                description: "La fecha final seleccionada es anterior a la fecha inicial.<br>" 
                + "Seleccione el mismo día o una fecha posterior para devolver el juego."}
            });

            this.loan.end_date = null;
        }
        else if (final_date >= 14 ) {

            const dialogRef = this.dialog.open(DialogMessageComponent, {
                data: { title: "Exceso de días del préstamo",
                description: "La fecha final excede en más de 14 días la fecha inicial.<br>" 
                + "Seleccione una fecha de devolución inferior a 14 días."}
            });

            this.loan.end_date = null;
        }
    }

    onClose() {
        this.dialogRef.close();
    }
}