import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import AndroidIcon from '@material-ui/icons/Android';
import { auth, provider } from './firebase';
function Login() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message))

    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="data:image/png;base64,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" alt="slack"/>
                 <h1>Sign in to SLACK</h1>
                <Button color="primary" variant="outlined" startIcon={<AndroidIcon />} onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
  background-color:#fff;
  height:100vh;
  display:grid;
  place-items:center;
`;
const LoginInnerContainer = styled.div`

padding:100px;
text-align:center;
border-radius:10px;
background-color:white;
box-shadow:0 1px 2px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
>img{
    object-fit:contain;
    max-width:100%;
}

>button{
    margin-top:50px;
    text-transform:inherit !important;
    
}

`;
