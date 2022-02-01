import React, { useState } from 'react';
import loginimg from '../../images/login.png'
import './Loginpage.css'
import Input from '@mui/material/Input';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import configFirebase from '../../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { badhonContext } from '../../App';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';


configFirebase()

const Loginpage = () => {
    const navi= useNavigate()
    const location= useLocation()
    const [context, setcontext] = React.useContext(badhonContext)
    console.log('lkkl', context)
    const [login, setlogin] = useState({
        logintime: false,
        email: '',
        photo: '',
        name: '',
        emailVerified: '',
        password:'',
        error:'',
        success:false
    })



    //gogole authen
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const handellogin = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const { photoURL, displayName, email, emailVerified } = res.user

                const signinfo = {
                    logintime: true,
                    email: email,
                    photo: photoURL,
                    name: displayName,
                    emailVerified: emailVerified
                }
                setlogin(signinfo)
                setcontext(signinfo)

            })
         if(location.state?.from){
           navi(location.state.from)
         }
    }


    
    //form submit
   const etargerblur=(e)=>{
      if(e.target.name==='name'){
          const hello = e.target.value
          const addinfo= {...login}
          addinfo[e.target.name]= hello
          setlogin(addinfo)
      }
      if(e.target.name==='password'){
          const password= e.target.value
          const addpass= {...login}
          addpass[e.target.name]=password
          setlogin(addpass)
          setcontext(addpass)
      }
      if(e.target.name==='email'){
        const email= e.target.value
        const addemail= {...login}
        addemail[e.target.name]=email
        setlogin(addemail)
        setcontext(addemail)
    }

   }

    const handelsubmit=(e)=>{
        if(login.email && login.password){
        
                // sign in with email and password

       
            createUserWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const addcrete = {...login}
        addcrete.error = ''
        addcrete.success=true
        setlogin(addcrete)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const adderror= {...login}
        adderror.error=errorMessage
        adderror.success=false
        setlogin(adderror)
        // ..
      });
        
    //  sign in with email and password end
        }
     
      e.preventDefault()
    }



    return (

        <div className='login'>
            <div className="row">
                <div className=" text-center col-md-6 yti">
                    <h3 className='dr' style={{}}>Login Now</h3>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '60%' },
                        }}
                    >
                        <form onSubmit={handelsubmit}>
                            <div className="file">
                          
                            {
                                login.error && <p style={{color:'red'}}>Your Email address all ready used try aging anther account</p>
                            }
                             {
                                login.success && <p style={{color:'green'}}>Create account successful</p>
                            }
                                <TextField color="warning"
                                   type='text' name='name' id="standard-basic" onBlur={etargerblur}label="User Name" variant="standard" />
                            </div>
                            <div className="">
                                <TextField type='email' name='email' onBlur={etargerblur} id="standard-basic" label="Enter your email" variant="standard" />
                            </div>
                            <div className="">
                                <TextField type='password' name='password' onBlur={etargerblur} id="standard-basic" label="Password" variant="standard" />
                            </div>

                            <div className="">
                                <FormControlLabel control={<Checkbox />} label="Remember Me" />
                            </div>
                            <div className="">
                                <Button type='submit' variant='contained' color='info'>Login</Button>
                            </div>
                        </form>
                        <div className="">
                            <div className="nnc">

                                <div className="ter">
                                    <p>Forget your password? <Link to="">Sign Up</Link></p>
                                </div>

                            </div>
                            <Button onClick={handellogin} className='bly' variant='contained' color='primary' >Login With <GoogleIcon className='gog' color='warning'></GoogleIcon></Button>
                        </div>
                    </Box>
                </div>
                <div className="col-md-5">
                    <div className="hile ">
                        <img className=' img-fluid' src={loginimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;