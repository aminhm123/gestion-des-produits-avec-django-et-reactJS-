import React, { useState, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


class Basket extends Component {

    state = {
        products : [],
        totale : 0
    }

    componentDidMount(){
        axios.get("/api_prod/produits")
            .then(response => {
                const products = response.data
                this.setState({ products : products.filter(prod => prod.quantity != 0) });
                let total = 0;
                this.state.products.map(prod => { total = total + ( prod.price * prod.quantity ) ;
                                                                this.setState({ totale : total }) });
            })
            .catch(e => {
                console.log(e);
            })
    }
    
    render(){
        return (    
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">le panier des produits</h5>
                <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Nom de produit</th>
                    <th scope="col">Prix</th>
                    <th scope="col">quantité</th>
                </tr>
                </thead>
                <tbody>
                   
                    {this.state.products.map(produit => (
                        <tr key={produit.id}>
                            <th scope="row">{ produit.name }</th>
                            <td>{ produit.price }£</td>
                            <td>{ produit.quantity } Articles</td>
                            <td>
                                <div className="ml-auto">
                                    <Button color="primary" className="ml-2" >Annuler un article</Button> 
                                    <Button color="primary" className="ml-5" >{produit.quantity * produit.price}£</Button>  
                                </div>
                            </td>
                        </tr>
                        
                    ))}
                    
                        <Button color="danger" className="ml-2" >Totale : {this.state.totale}</Button> 
                </tbody>
            </table>
                <Link to="" className="btn btn-success mr-2">passer cette commande</Link>
                <Link to="" className="btn btn-warning mr-2">Retour</Link>
                </div>
            </div>
            
        )
    }
    
}
export default Basket;

