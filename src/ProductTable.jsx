import React from 'react';
import { ProductCategoryRow, ProductRow } from './FilterableProductTable';

// ? product table
export function ProductTable() {
    return (
        <div className="product-table__container">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <ProductCategoryRow rows="1" name="Sporting Goods" />
                <ProductRow name="Football" price="$49.99" />
                <ProductRow name="Baseball" price="$9.99" />
                <ProductRow name="Basketball" price="$29.99" />
                <ProductCategoryRow rows="2" name="Electronics" />
                <ProductRow name="iPod Touch" price="$99.99" />
                <ProductRow name="iPhone 5" price="$399.99" />
                <ProductRow name="Nexus 7" price="$199.99" />
            </table>
        </div>
    );
}
