import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Home from './component/Home';
import AddProduct from './component/AddProduct';
import UpdateProduct from './component/UpdateProduct';
import Basket from './component/Basket';



class App extends Component {
    render(){
        return (
        
            <div style={{maxWidth:"60rem" , margin:"4rem auto"}}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component = {Home}  />
                        <Route exact path="/add" component = {AddProduct}  />
                        <Route exact path="/edit/:id" component = {UpdateProduct}  />
                        <Route exact path="/panier" component = {Basket}  />
                    </Switch>
                </BrowserRouter> 
            </div>
            
        ); 
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
