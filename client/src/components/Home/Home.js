import Banner from "../Banner/Banner"
import Blog from "./Blog"
import Category from "./Category"
import {Grid} from "@mui/material"


const Home = () => {
  return (
    <>
        <Banner/>
        <Grid container>
            <Grid item lg={2} sm={2} xs={2}>
                <Category/>
            </Grid>
            <Grid item lg={10} sm={10} xs={10}>
                <Blog/>
            </Grid>
        </Grid>
        
    
    </>
  )
}

export default Home