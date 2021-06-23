import Header from "./components/Header.js";
import ProductCategories from "./components/ProductCategories.js";
import ProductsList from "./components/ProductsList.js";
import Footer from "./components/Footer.js";
import React from "react";


export default class App extends React.Component {
  contrcutor() {}

    render() {
    return (
    <div className="container">
      <Header />
      <ProductCategories />
      <ProductsList />
      <Footer />
    </div>
    );
  }
}