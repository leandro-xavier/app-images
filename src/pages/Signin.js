import React,{useState, useContext} from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap'
import { Link , useHistory} from 'react-router-dom';
import M from 'materialize-css'
import Navigation from '../components/Navigation';
import './Signin.css'
//import {UserContext} from '../../App'

const Signin = () => {
   // const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = () => {

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           M.toast({html: "invalid email", classes:"#b71c1c red darken-4"})
           return
        }
        fetch("https://sublimat-back.herokuapp.com/auth/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                password,
                email
            })
            }).then(res => res.json())
            .then(data => {
                if(data.error){
                    M.toast({html: data.error, classes:"#b71c1c red darken-4"})
                }
                else{
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user",JSON.stringify(data.user) )
                 //   dispatch({type:"USER",payload:data.user})
                  //  M.toast({html: "signing success", classes:"#43a047 green darken-1"})
                    history.push('/Profile')
                }
        }).catch(err => {
            console.log(err)
        })
    }
   
    return (
        <div className="clas">
            <Navigation/>
            <Form className="m-auto form" style={{ width: '18rem'}}>
                <Form.Group className="card auth-card input-field">
                   <Form.Label className="text-md-center "><h2>Login</h2></Form.Label>
                   <Form.Control className="mt-2" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                   <Form.Control className="mt-2" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Button variant="secondary" className="mt-2" onClick={()=> PostData()}>Login</Button>
                            <Link to="/signup">Dont have an account</Link>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Signin;
