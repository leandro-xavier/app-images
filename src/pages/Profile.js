import React, {Component} from 'react'
import Navigation from '../components/Navigation'
import ProductCardUser from '../containers/ProductCardUser'
import ProductPostForm from '../components/ProductPostForm'
import {Link} from 'react-router-dom'
import axios from 'axios';


export default class Profile extends Component {

    state = {

    }

    componentDidMount() {
        const config = {
            headers:{
             Autorization:'Bearer ' + localStorage.getItem('token')
             }
        };

        axios.get('user', config).then(
            res => {
                this.setState({
                    user: res.data
                });
            },
            err => {
                console.log(err)
            }
        )
        
    }

    render(){

        if(this.state.user){
            return(
                <h2>hi {this.state.user.email} </h2>
            )
        }
        return (
            <div>
            <Navigation/>
            
            <ProductPostForm/>
               
            </div>
        )
    }
}
  
        

