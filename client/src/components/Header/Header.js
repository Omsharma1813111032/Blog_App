import {AppBar, Toolbar, Typography, styled} from "@mui/material"
import {useNavigate} from "react-router-dom"

const Component = styled(AppBar)`

    background:#ffffff;
    color:#000;

`

const Container = styled(Toolbar)`
    justify-content:center;
    & > p{
        padding:20px;
    }
`

const LinkComponent = styled(Typography)`
    cursor:pointer;
`


const Header = () => {
    const navigate = useNavigate()

    const logoutHandle = () =>{
        sessionStorage.removeItem('accessToken')
        navigate("/login")
    }

  return (
    <Component>
        <Container>
            <LinkComponent>Home</LinkComponent>
            <LinkComponent>About</LinkComponent>
            <LinkComponent>Blog</LinkComponent>
            <LinkComponent onClick={logoutHandle} >Logout</LinkComponent>
        </Container>
    </Component>
  )
}

export default Header