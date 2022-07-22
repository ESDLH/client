import { LoanPage } from "./LoanPage";

export const LOAN_DATA: LoanPage = {
    content: [
        { 
            id: 1, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            customer: { id: 1, name: 'Mª José de los Frijoles' },
            loan_date: new Date(12/12/2022),
            end_date: new Date(20/12/2022) 
        },
        { 
            id: 2, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            customer: { id: 1, name: 'Mª José de los Frijoles' },
            loan_date: new Date(12/12/2022),
            end_date: new Date(20/12/2022) 
        },
        { 
            id: 3, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            customer: { id: 1, name: 'Mª José de los Frijoles' },
            loan_date: new Date(12/12/2022),
            end_date: new Date(20/12/2022) 
        },
        { 
            id: 4, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            customer: { id: 1, name: 'Mª José de los Frijoles' },
            loan_date: new Date(12/12/2022),
            end_date: new Date(20/12/2022) 
        },
        { 
            id: 5, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            customer: { id: 1, name: 'Mª José de los Frijoles' },
            loan_date: new Date(12/12/2022),
            end_date: new Date(20/12/2022) 
        },
        { 
            id: 6, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            customer: { id: 1, name: 'Mª José de los Frijoles' },
            loan_date: new Date(12/12/2022),
            end_date: new Date(20/12/2022) 
        },
        { 
            id: 7, 
            game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
            customer: { id: 1, name: 'Mª José de los Frijoles' },
            loan_date: new Date(12/12/2022),
            end_date: new Date(20/12/2022) 
        },

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