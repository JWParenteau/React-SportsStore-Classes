import React from 'react';

export default class ProductCategory extends React.Component {
    constructor(props) {
        super(props);
        this.category = props.category;
    }
    
    render() {    
        return (
        <li>
            <button>
            <a href="">{this.category}</a>
            </button>
        </li>
        );
    }
}