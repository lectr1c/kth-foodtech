import styled from "styled-components";
import {Button, Card, Grid, Group, Text, Image, Badge} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

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

    return (
        <div style={{height: '100vh', width: '100%', position: "relative"}}>
            <Group position={"center"} spacing={"xl"} grow style={{padding: 50}}>
                <div style={{width: 340}}>
                <Card shadow={"md"} padding={"xl"}>
                        <Card.Section>
                            <Image
                                radius={0}
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="Random unsplash image"
                            />
                        </Card.Section>
                        <Group position="apart" style={{ marginBottom: 5}} mt={"sm"}>
                            <Text weight={500}>Vigils accelerare in emeritis berolinum!</Text>
                            <Badge color="pink" variant="light">
                                BADGE
                            </Badge>
                        </Group>

                        <Text size="sm" style={{ color: 'white', lineHeight: 1.5 }}>
                                Sunt brabeutaes attrahendam festus, barbatus lunaes. Ubi est rusticus vortex?
                        </Text>

                        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                            Habitio, epos, et orgia.
                        </Button>
                    </Card>
                </div>
                <div style={{width: 340}}>
                    <Card shadow={"md"} padding={"xl"}>
                        <Card.Section>
                            <Image
                                radius={0}
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="Random unsplash image"
                            />
                        </Card.Section>
                        <Group position="apart" style={{ marginBottom: 5}} mt={"sm"}>
                            <Text weight={500}>Cur hydra credere?</Text>
                            <Badge color="green" variant="light">
                                On Sale
                            </Badge>
                        </Group>

                        <Text size="sm" style={{ color: 'white', lineHeight: 1.5 }}>
                            Ionicis tormentos unda in quadrata! Cum resistentia resistere, omnes ventuses reperire altus, fatalis canises.
                            Placidus, gratis extums inciviliter captis de clemens, mirabilis amicitia.
                        </Text>

                        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                            Decor fatalis fermium est.
                        </Button>
                    </Card>
                </div>
            </Group>
        </div>
    )
}

export default Main;