import React, { Component, useState , useEffect } from 'react';
import { Link , Redirect} from 'react-router-dom';
import axios from 'axios';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    

 } from 'reactstrap';

const UpdateProduct = props => {
    const initialTutorialState = {
      id: null,
      name: "",
      category: "",
      price: 0,
      description: ""
    };
    const [product, setProduct] = useState(initialTutorialState);
    const [message, setMessage] = useState("");
    const [flag, setFlag] = useState(false);

  
    const getProduct = id => {
      axios.get(`/api_prod/produit/${id}`)
        .then(response => {
            setProduct(response.data);
            console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    useEffect(() => {
        getProduct(props.match.params.id);
    }, [props.match.params.id]);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setProduct({ ...product, [name]: value });
    };
  
    const updateProduct = (e) => {
        e.preventDefault();
        var data = {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            description: product.description,
            produits : 5
        };
    
        axios.put(`/api_prod/produit/${product.id}`, data)
            .then(response => {
                console.log(response.data);
                setMessage("The tutorial was updated successfully!");
                setFlag(true);
                })
            .catch(e => {
            console.log(e);
            });
    };
  
    
  
  
    return (
        <Form onSubmit={updateProduct}>
            <FormGroup>
                <Label>Nom de produit</Label>
                <Input 
                type="text"
                value={product.name}
                required              
                onChange={handleInputChange} 
                placeholder={product.name}
                name="name" />
            </FormGroup>

            <FormGroup>
                <Label>Categorie</Label>
                <Input 
                type="text"
                value={product.category}
                required              
                onChange={handleInputChange} 
                placeholder={product.category}
                name= "category" />            
            </FormGroup>

            <FormGroup>
                <Label>Prix de produit</Label>
                <Input 
                type="number" 
                value={product.price} 
                required
                onChange={handleInputChange} 
                placeholder={product.price}
                name="price"
                    />
            </FormGroup>

            <FormGroup>
                <Label>Description</Label>
                <Input 
                type="text"
                value={product.description}
                required              
                onChange={handleInputChange} 
                placeholder={product.description}
                name= "description" />              
                </FormGroup>
            
            <Button variant="primary" type="submit"  >
                Metre a jour
            </Button>
            <Link to="" className="btn btn-danger ml-2">Annuler</Link>
            <br/>
            {flag ? ( <Redirect to="" /> ) : null}
            
        </Form>
    );
  };
  
export default UpdateProduct;



