import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Basket from './Basket';
import { Button } from 'reactstrap';

const  Heading = () => {

    
   
    return (
        <nav>
            <Link to="/panier" className="btn btn-info btn-lg">Panier</Link>
            <Link to="/add" className="btn btn-info btn-lg">Ajouter Produit</Link>
            
        </nav>
        

    )
   
    
}

export default Heading;

