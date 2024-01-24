import * as React from 'react';
import {Box, TextField, Button, styled} from "@mui/material"

const Component = styled(Box)`
    width:400px;
    margin:auto;
    box-shadow:5px 2px 5px 2px rgb(0 0 0/0.7)
`

const Image = styled('img')({
    width:100,
    margin:"auto",
    display:'flex',
    padding:'50px 0 0 '
})

const Wrapper = styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div, & > button{
        margin:20px
    }
`

const LoginButton = styled(Button)`
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
    &:hover {
        background-color: #FFF;
        color:#FB641B;
    }
`

const SignupButton = styled(Button)`
    background:#FFF;
    color:#FB641B;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%)
`

const Login = () => {
    const imageUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

    return (
    <Component>
        <Box>
            <Image src={imageUrl} alt="login_pic"/>
            <Wrapper>
                <TextField variant="standard" label="Enter Username" />
                <TextField variant="standard"  label="Enter Password" />
                <LoginButton variant="contained">LOGIN</LoginButton>
                <SignupButton>CREATE AN ACCOUNT</SignupButton>
            </Wrapper>
        </Box>
    </Component>
  )
}

export default Login