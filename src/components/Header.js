import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.buttonText = props.buttonText;
        this.title="Sports Store";
        this.buttonText= "Sign Up";
    }



    render() {
        return (
            <header>
                <h1>{this.title}</h1>
                <button>
                    <a href="">{this.buttonText}</a>
                </button>
            </header>
        );
    }
}
