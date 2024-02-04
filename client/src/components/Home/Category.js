import {Button, Table, TableHead, TableRow, TableCell, TableBody, styled} from "@mui/material"
import { categories } from "../../constant/Data"
import {useNavigate} from "react-router-dom"

const StyledTable = styled(Table)`
    border:1px solid rgba(224,224,224,1)
`
const StyledButton = styled(Button)`
    margin:20px;
    width:85%;
    background-color:#6495ED;
    color:white;
`

const Category = () => {
    const navigate = useNavigate()
    const createBlogHandle = ()=> {
        navigate("/create")
    }


  return (
    <>
        <StyledButton variant="contained" onClick={createBlogHandle} >Create Blog</StyledButton>

        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        All Categories
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categories.map(category=>(
                    <TableRow key={category.id}>
                        <TableCell>{category.type}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </StyledTable>


    </>
  ) 
}

export default Category