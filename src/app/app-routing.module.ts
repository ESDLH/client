import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { LoanListComponent } from './loan/loan-list/loan-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full'},
  { path: 'categories', component: CategoryListComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'games', component: GameListComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'loans', component: LoanListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
