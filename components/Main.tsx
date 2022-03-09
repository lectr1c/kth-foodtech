import styled from "styled-components";
import {Button, Card, Grid, Group, Text, Image, Badge, Title} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ImageN from 'next/image';
import { useColorScheme } from "@mantine/hooks";
import foodtechSVG from '../public/foodtechIllustration.svg';

import Link  from "next/link";
import _Document from "../pages/_document";
const initialProps = _Document.getInitialProps;

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
    const colorScheme = useColorScheme();
    const matches860 = useMediaQuery('(min-width: 860px)');
    const matches600 = useMediaQuery('(min-width: 600px)');


    return (
        <div style={{width: '100%', minHeight: matches860 ? '75vh' : matches600 ? '750px' : '600px', position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Group position="center" spacing={100}>
                <div style={{maxWidth: '500px'}}>
                    <div style={{maxHeight: matches600 ? '120px' : '70px', marginLeft: 10}}>
                        <Text
                            align="left"
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'green', deg: 135 }}
                            size="xl"
                            weight={700}
                            style={{ fontFamily: 'Greycliff CF, sans-serif', fontSize: matches600 ? '52px' : '1.2rem'}}
                        >
                            We love
                        </Text>
                        <Text
                            align="left"
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'green', deg: 135 }}
                            size="xl"
                            weight={700}
                            style={{ fontFamily: 'Greycliff CF, sans-serif',
                                fontSize: matches600 ? '52px' : '1.2rem',
                                position: 'relative',
                                top: matches600 ? '-30px' : '-10px',
                                left: '5px'}}
                        >
                            Food & Technology
                        </Text>
                    </div>
                    <Text mx={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo, sem at pharetra faucibus, nulla tortor convallis elit, vel ornare leo nunc eu risus.</Text>
                    <Button radius={"md"} variant={"filled"} color={'green'} m={15}>Our Partners</Button>
                </div>
                <div>
                    <div style={{marginLeft: matches860 ? 50 : 5, marginRight: matches860 ? 50 : 5}}>
                        <ImageN src={foodtechSVG} />
                    </div>
                </div>
            </Group>
        </div>
    )
}

export default Main;