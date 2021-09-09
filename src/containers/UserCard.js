import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap'
import '../App.css'
import Navigation from '../components/Navigation';

export default class UserCard extends React.Component{
    state = {
        persons:[]
};

componentDidMount(){
        axios.get('https://sublimat-back.herokuapp.com/user')
        .then(res => {
            const persons = res.data;
            this.setState({persons});
        })
}

deletePost = (id) => {
    axios.delete(`https://sublimat-back.herokuapp.com/user/${id}`)
    .then(response => {
        if(response.data != null){
            window.confirm("estas seguro que quieres eliminar el producto")
            this.setState({
                persons: this.state.persons.filter(person => person._id !== id)
            })
        }
    })
};


render(){
    return (
        <div>
            <Navigation/>
        <ul>
            {this.state.persons.map(person => (
                <Card style={{width: '18rem'}}>
                    <Card.Img variant='top' src='holder.js/100px180'/>
                <Card.Body>

                    <Card.Title>{person.email}</Card.Title>
                    <Card.Text>{person.username}</Card.Text>
                    <Button variant='primary' onClick={this.deletePost.bind(this, person._id)}>ver</Button>
                </Card.Body>
                </Card>
                /*<div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{person.title}</h5>
                            <p className="card-text">{person.description}</p>
                            <h2>Price:{person.price}</h2>
                            <Link to="/Carrito" className="btn btn-primary">Buy</Link>
                            
                         <button onClick={this.deletePost.bind(this, person._id)} className="btn btn-danger">Delete</button>
                           <div>
                               <button>agregar</button>
                               <button>me gusta</button>
                           </div>
                        </div>
                </div> 
                */
            ))}
        </ul>
        </div>
    )
}
}
