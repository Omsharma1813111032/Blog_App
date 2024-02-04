import {Button, Table, TableHead, TableRow, TableCell, TableBody, styled} from "@mui/material"
import { categories } from "../../constant/Data"
import {Link, useSearchParams} from "react-router-dom"

const StyledTable = styled(Table)`
    border:1px solid rgba(224,224,224,1)
`
const StyledButton = styled(Button)`
    margin:20px;
    width:85%;
    background-color:#6495ED;
    color:white;
`

const StyledLink = styled(Link)`
    color:inherit;
    text-decoration:none;
`


const Category = () => {

    const [searchParams]  = useSearchParams()
    const category = searchParams.get('category')

  return (
    <>
        <StyledLink to={`/create?category=${category || ''}`}>
            <StyledButton variant="contained">Create Blog</StyledButton>
        </StyledLink>

        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <StyledLink to="/">
                            All Categories
                        </StyledLink>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categories.map(category=>(
                    <TableRow key={category.id}>
                        <TableCell>
                            <StyledLink to={`/?category=${category.type}`}>
                                {category.type}
                            </StyledLink>
                        
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </StyledTable>


    </>
  ) 
}

export default Category