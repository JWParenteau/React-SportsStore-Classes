import React from 'react';
import ProductCategory from "./ProductCategory.js";
import productCategories from "../data/productCategories.json";

export default class ProductCategories extends React.Component {
    constructor(props) {
        super(props);
/*        
        this.productCategories = props.productCategories;
        this.category = props.category;
*/
    }
    
    
    
    render() {   
        return (
        <section class="categories">
            <ul>
                {productCategories.map((category) => <ProductCategory category={category}/>)}
            </ul>
        </section>
        );
    }
}