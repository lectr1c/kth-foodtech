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
    const matchesQuery = useMediaQuery('(min-width: 860px)');

    return (
        <div style={{width: '100%', minHeight: matchesQuery ? '1000px' : '700px', position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Group position="center" spacing={100}>
                <div>
                    <Text
                        component="span"
                        align="center"
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'green', deg: 45 }}
                        size="xl"
                        weight={700}
                        style={{ fontFamily: 'Greycliff CF, sans-serif', fontSize: '52px'}}
                    >
                        KTH Foodtech
                    </Text>
                </div>
                <div>
                    <div style={{marginLeft: 50, marginRight: 50}}>
                        <ImageN src={foodtechSVG}/>
                    </div>
                </div>
            </Group>
        </div>
    )
}

export default Main;