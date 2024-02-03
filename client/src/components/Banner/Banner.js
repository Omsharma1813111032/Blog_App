import React from 'react'

import {Box, Typography, styled} from "@mui/material"

const Image = styled(Box)`
    background:url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55%;
    width:100%;
    height:50vh;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;
    align-items:center;
    color:white;
`

const Heading = styled(Typography)`
 font-size:70px
`

const SubHeading = styled(Typography)`
    font-size:20px;
    background:#fff;
    color:#000;
`


const Banner = () => {
  return (
    <Image>
        <Heading>BLOG</Heading>
        <SubHeading>Blogging Website</SubHeading>
    </Image>
  )
}

export default Banner