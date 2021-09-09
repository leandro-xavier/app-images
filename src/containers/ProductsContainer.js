import React,{ Component } from 'react';
import axios from 'axios';
import List from '../components/List';




class ProductsContainer extends Component{

    componentDidMount(){

        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(result=>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
   
    }
    render(){
            return(
                

                <List/>
            );
    }
}

export default ProductsContainer;