import React from 'react';
import { ProductTable } from './ProductTable';

// ? search bar
function SearchBar () {
    return (
        <div className="search-bar_container">
            <input 
                type="text" 
                placeholder='search...'
            />
            <div className="search-bar_in_stack_checkbox">
                <input type="checkbox" />
                <label>Only show products in stock</label>
            </div>
        </div>
    );
}

// ? product category row
export function ProductCategoryRow ({ rows, name }) {
    return (
        <tr>
            <th colSpan={rows}>
                <strong>{name}</strong>
            </th>
        </tr>
    );
}

// ? product row
export function ProductRow ({ name, price }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
}

// ? product filterable table
function FilterableProductTable () {
    return (
        <div className="container">
            <SearchBar />
            <ProductTable />
        </div>
    );
};


export default FilterableProductTable;
