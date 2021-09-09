import React from 'react';
import axios from 'axios';
import '../App.css'

export default class ProductCard extends React.Component{
    state = {
        persons:[]
};

componentDidMount(){
        axios.get('http://localhost:5000/product/productUser')
        .then(res => {
            const persons = res.data;
            this.setState({persons});
        })
}

deletePost = (postId) => {
    axios.delete(`http://localhost:5000/product/${postId}`)
    .then(response => {
        if(response.data != null){
            window.confirm("estas seguro que quieres eliminar el producto")
            this.setState({
                persons: this.state.persons.filter(person => person._id !== postId)
            })
        }
    })
};


render(){
    return (
        <ul>
            {this.state.persons.map(person => (
                
                <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{person.title}</h5>
                            <p className="card-text">{person.description}</p>
                            <h2>Price:{person.price}</h2>
                            <a href="/" className="btn btn-primary">Buy</a>
                         <button onClick={this.deletePost.bind(this, person._id)} className="btn btn-danger">Delete</button>
                           
                        </div>
                </div> 
            ))}
        </ul>
    )
}
}
