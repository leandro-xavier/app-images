import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductCard from './containers/ProductCard';
import ProductPostForm from './components/ProductPostForm'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Carrito from './components/Carrito';
import DetailProductPage from './components/DetailProductPage/DetailProductPage';
import UserCard from './containers/UserCard';

const Routes = () => {
    return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/products' component={ProductCard}/>
                <Route path='/ProductPostForm' component={ProductPostForm}/>
                <Route path='/signin' component={Signin}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/Profile' component={Profile}/>
                <Route path='/Carrito' component={Carrito} />
                <Route path='/checkout' componet={DetailProductPage}/>
                <Route exact path='/user' component={UserCard}/>
            </Switch>
    );
}

export default Routes;