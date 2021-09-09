import React, {Component} from 'react'
import axios from 'axios'
import Home from './Home.js'

class ProductPostForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            title:'',
            description: '',
            price: '',
            image:''
        }
    }

    changeHandler= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000/product', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    /*
    onPostDeleteHandler = (e, id) => {
        if(window.confirm('are you sure you do want to delete')){
            axios.delete(`http://localhost:5000/product/${id}.json`)
            .then(response => {
                this.getPost
            })
        }
    }
    */
    


    render(){
        const {title, description, price, image} = this.state
        return(
            
            <div className="d-flex justify-content-center align-items-center container">
            <form onSubmit={this.submitHandler}>
            <div className="d-flex justify-content-center align-items-center">
                <h2>Upload product</h2>
            </div>
               
                <div className="form-group">
                <label>Title</label>
                    <input type="text"  className="form-control" name="title" value={title} onChange={this.changeHandler}/>
                </div>
                <div  className="form-group">
                <label>description</label>
                    <input type="text" className="form-control" name="description"  value={description} onChange={this.changeHandler}/>
                </div>
                <div  className="form-group">
                <label>price</label>
                    <input type="text" className="form-control" name="price" value={price} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Subir imagen</label>
                    <input type="file" className="form-control-file" name="image" value={image} onChange={this.changeHandler}/>
                </div>
                
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary" >Submit</button>
                    </div>
            </form>
            </div>
        )
    }
}

export default ProductPostForm
