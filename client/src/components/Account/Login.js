import {useState, useContext} from 'react';
import {Box, TextField, Button, styled} from "@mui/material"
import {register,login} from "../../services/apis"
import { ToastContainer, toast } from 'react-toastify';
import {dataContext} from "../../contextApi/DataProvider"
import {useNavigate} from "react-router-dom"

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


const Login = ({isUserAuthenticated}) => {
    const imageUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    const {setAccount} = useContext(dataContext)
    const navigate = useNavigate()

    const [account,toggleAccount] = useState('login')

    const [data,setFormData] = useState({
        name:"",
        email:"",
        password:""
    }) 


    const formToggle = () =>{
        account==='login'?toggleAccount('singup'):toggleAccount('login')
        setFormData({...data,name:"",email:"",password:""})
    }

    // console.log(data)
  

    const handleRegister = async(e) =>{
        e.preventDefault()
        const result = await register(data)
        if(result.status===200){
            toast("User registered!!")
            setFormData({...data,name:"",email:"",password:""})
        }else{
            toast.error("Something went wrong!!")
        }
    }

    const handleLogin = async(e) =>{
        e.preventDefault()
        const result = await login(data)
        if(result.status===200){

            sessionStorage.setItem('accessToken',`Bearer ${result.data.token}`)

            // toast.success("User Login!!")
            setAccount({name:result.data.name, email:result.data.email})
            setFormData({...data,email:"",password:""})
            isUserAuthenticated(true)
            navigate("/")


        }else{
            toast.error("Something went wrong!!")
        }
    }



    return (
    <Component>
        <Box>
            <Image src={imageUrl} alt="login_pic"/>

            {account === 'login' ? 
                <Wrapper>
                    <TextField onChange={(e)=>{setFormData({...data,email:e.target.value})}} value={data.email}  variant="standard" label="Enter Username" />
                    <TextField onChange={(e)=>{setFormData({...data,password:e.target.value})}} value={data.password} variant="standard" type="password"  label="Enter Password" />
                    <LoginButton variant="contained"   onClick={(e)=>{handleLogin(e)}}  >LOGIN</LoginButton>
                    <SignupButton onClick={(e)=>{formToggle()}} >CREATE AN ACCOUNT</SignupButton>
                </Wrapper>
            : 
            <Wrapper>
                <TextField onChange={(e)=>{setFormData({...data,name:e.target.value})}} value={data.name} variant="standard" label="Enter Name" />
                <TextField onChange={(e)=>{setFormData({...data,email:e.target.value})}} value={data.email} variant="standard"  label="Enter Username" />
                <TextField onChange={(e)=>{setFormData({...data,password:e.target.value})}} value={data.password} variant="standard" type="password"   label="Enter Password" />
                <LoginButton variant="contained"  onClick={(e)=>{handleRegister(e)}}  >Register</LoginButton>
                <SignupButton onClick={(e)=>{formToggle()}}>Log in</SignupButton>
            </Wrapper>
        }
            
        </Box>
        <ToastContainer/>
    </Component>
  )
}

export default Login