import React, { Fragment , useContext, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
    ListGroup,
    ListGroupItem,
    Button
 } from 'reactstrap';

class ProductList extends Component {


        
    delete = (id) => {
        this.props.deleteProd(id);
    }

    achat = ( produit) => {
        this.props.updateAchat(produit);
    }
   
    
    render(){
        const { products } = this.props;
        return (
            <Fragment>
                <ListGroup>
                    <ListGroupItem className="d-flex">Tableau des produits</ListGroupItem>
                </ListGroup>
                <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Nom de produit</th>
                    <th scope="col">Categorie</th>
                    <th scope="col">Prix</th>
                    <th scope="col">actions</th>
                </tr>
                </thead>
                <tbody>
                   
                    {products.map(produit => (
                        <tr key={produit.id}>
                            <th scope="row">{ produit.name }</th>
                            <td>{ produit.category }</td>
                            <td>{ produit.price }£</td>
                            <td>
                                <div className="ml-auto">
                                    <Link to={"/edit/" + produit.id } className="btn btn-warning mr-2">changer</Link>
                                    <Button color="danger" onClick={e => this.delete(produit.id)} >Delete</Button>
                                    <Button color="success" onClick={e => this.achat(produit)} className="ml-2" >Acheter</Button> 
                                    <Button color="primary" className="ml-5" >{produit.quantity}</Button>  
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </Fragment>
        );
    }
    
}

export default ProductList;
