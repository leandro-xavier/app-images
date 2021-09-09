import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {Form, Col, Row, Button} from 'react-bootstrap'
import M from 'materialize-css'
import Navigation from '../components/Navigation';

const Signup = () => {

    const history = useHistory()
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = () => {

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           M.toast({html: "invalid email", classes:"#b71c1c red darken-4"})
           return
        }
        fetch("https://sublimat-back.herokuapp.com/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,
                password,
                email
            })
            }).then(res => res.json())
            .then(data => {
                if(data.error){
                    M.toast({html: data.error, classes:"#b71c1c red darken-4"})
                }
                else{
                    M.toast({html:data.message, classes:"#43a047 green darken-1"})
                    history.push('/signin')
                }
        }).catch(err => {
            console.log(err)
        })
    
    }
    

    return (
        <div>
            <Navigation />
              <Form className="m-auto form" style={{ width: '18rem'}}>
                <Form.Group className="card auth-card input-field">
                <Form.Label className="text-md-center"><h2>Register</h2></Form.Label>
                   <Form.Control className="mt-2" type="text" placeholder="name" value={username} onChange={(e) => setName(e.target.value)}/>
                   <Form.Control className="mt-2" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                   <Form.Control className="mt-2" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Button variant="secondary" className="mt-4" onClick={() => PostData()}>SignUP</Button>
                            <Link to="/signin">Already have an account</Link>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Signup;