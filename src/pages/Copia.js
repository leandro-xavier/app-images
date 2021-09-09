import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
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
         {/*<Navigation />*/}
              <div className="mycard">
                <div className="card auth-card input-field">
                   <h2>Register</h2>
                   <input type="text" placeholder="name" value={username} onChange={(e) => setName(e.target.value)}/>
                   <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                   <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => PostData()}>SignUP</button>
                        <h5>
                            <Link to="/signin">Already have an account</Link>
                        </h5>
                </div>
            </div>
        </div>
    );
}

export default Signup;