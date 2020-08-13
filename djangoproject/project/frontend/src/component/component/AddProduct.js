import React, { Component ,  useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    } from 'reactstrap';


class AddProduct extends Component {

    state = {
        name : "",
        category : "",
        price : 0 ,
        description : ""
    };

    getCookie(name) {
        if (!document.cookie) {
            return null;
        }
        const token = document.cookie.split(';')
            .map(c => c.trim())
            .filter(c => c.startsWith(name + '='));
    
        if (token.length === 0) {
            return null;
        }
        return decodeURIComponent(token[0].split('=')[1]);
        }
    

    

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    saveProduct = (e) => {
        
        e.preventDefault();
        console.log(this.state);

        axios.post('/api_prod/produits', {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price,
            description: this.state.description,
            produits : 5

        } , {
            headers: {
                "X-CSRFToken" : this.getCookie('CSRF-TOKEN'),
                "content-type" : "application/json",
                'Accept': 'application/json'
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(e => console.log(e));
        this.setState({
            name : "",
            category : "",
            price : 0 ,
            description : ""
        })
    }


    

    render(){
        const { name , category , price , description } = this.state;
        return (   
            
            <Form onSubmit={this.saveProduct}>
                <FormGroup>
                    <Label>Nom de produit</Label>
                    <Input 
                    type="text"
                    value={name}
                    required              
                    onChange={this.handleInputChange} 
                    placeholder="nom de produit"
                    name="name" />
                </FormGroup>
    
                <FormGroup>
                    <Label>Categorie</Label>
                    <Input 
                    type="text"
                    value={category}
                    required              
                    onChange={this.handleInputChange} 
                    placeholder="categorie"
                    name= "category" />            
                </FormGroup>
    
                <FormGroup>
                    <Label>Prix de produit</Label>
                    <Input 
                    type="number" 
                    value={price} 
                    required
                    onChange={this.handleInputChange} 
                    placeholder="prix"
                    name="price"
                     />
                </FormGroup>
    
                <FormGroup>
                    <Label>Description</Label>
                    <Input 
                    type="text"
                    value={description}
                    required              
                    onChange={this.handleInputChange} 
                    placeholder="description"
                    name= "description" />              
                    </FormGroup>
                
                <Button variant="primary" type="submit"  >
                    Ajouter
                </Button>
                <Link to="" className="btn btn-danger ml-2">Retour</Link>
            <br/>
            
        </Form>
            
        )
    }
    
}

export default AddProduct;

