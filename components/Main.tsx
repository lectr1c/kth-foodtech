import styled from "styled-components";
import {Box, flexbox, Grid, GridItem} from "@chakra-ui/react";

interface mainProps {
    readonly green?: boolean;
}

const MainContainer = styled.main<mainProps>`
  height: 95vh;
  width: 100%;
  background-color: ${props => props.green ? "gray" : "lightgray"};
  
  :hover {
    background-color: ${props => props.green ? "lightgray" : "gray"};
  }
  
  @media screen and (min-height: 1440px){
    height: 1440px;
  }
`

const data = {
    "data":[
        {"title":"Box 1"},
        {"title":"Box 2"},
        {"title":"Box 3"}
    ]
}

const Main = (props: object) => {
    return (
        <Box backgroundColor={"gray.500"} height='100vh' width='100%'>
            <Grid gap={1} templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' pt={20} mx={20}>
                {data.data.map((item) => {
                    return <GridItem w='100%' h='100' bg='green.600' key={item.title}>{item.title}</GridItem>;
                })}
                <GridItem colSpan={2} bg='purple.700'/>
                <GridItem colSpan={1} bg='green.300'/>
                <GridItem rowStart={0} rowEnd={2} colStart={0} colEnd={0} rowSpan={2} colSpan={1} bg='red.300'> Hi </GridItem>
            </Grid>
        </Box>
    )
}

export default Main;