import { LoanPage } from "./LoanPage";

export const AUTHOR_DATA: LoanPage = {
    content: [
        { id: 1, game.title: 'Klaus Teuber', customer.name: 'Francisco', loan_date: new Date(12/12/2022), end_date: new Date(20/12/2022) },

    ],  
    pageable : {
        pageSize: 5,
        pageNumber: 0,
        sort: [
            {property: "id", direction: "ASC"}
        ]
    },
    totalElements: 7
}