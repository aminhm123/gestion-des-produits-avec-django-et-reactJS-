import React, { Fragment, Component } from 'react';
import Heading from './Heading';
import  ProductList from './ProductList';
import axios from 'axios';

require("babel-polyfill")

class Home extends Component {

    constructor(props) {
        super(props);
    this.state = {
        products : [],
        };
    this.updateAchat = this.updateAchat.bind(this);
    this.delete = this.delete.bind(this);


      }

    componentDidMount(){
        axios.get("/api_prod/produits")
            .then(response => {
                const products = response.data;
                this.setState({ products });
            })
            .catch(e => {
                console.log(e);
            })
    }
    updateAchat(produit){
        axios.patch(`/api_prod/produit/${produit.id}` , {  quantity: parseInt(produit.quantity)+1})
            .then(res => console.log())
            .catch(e => console.log(e));
        axios.get("/api_prod/produits")
        .then(res => {
            const products = res.data;
            this.setState({ products })
        })
        .catch(e => console.log(e))
    };
    delete = (id) => {
        axios.delete(`/api_prod/produit/${id}`)
            .then(res => {
                const products = this.state.products.filter(product => product.id != id);
                this.setState({products});
            })
            .catch(e => console.log(e));          
    };
    render(){
        return (
            <Fragment>
                <Heading/>
                <ProductList products={this.state.products} deleteProd={this.delete} updateAchat={this.updateAchat} />
            </Fragment>
        )
    }
    
};

export default Home ;
