import {Button, Group, Text} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import ImageN from 'next/image';
import foodtechSVG from '../public/foodtechIllustration.svg';
import {useEffect, useState} from "react";
import SchemeToggler from "./SchemeToggler";
import {NextComponentType} from "next";


const Hero : NextComponentType = (props) => {

    const [matches860, set860] = useState(true);
    const [matches600, set600] = useState(true);

    const { width } = useViewportSize();

    useEffect(() => {
        set860(window.matchMedia('(min-width: 800px)').matches);
        set600(window.matchMedia('(min-width: 600px)').matches);
    }, [width])

    return (
        <div style={{width: '100%', minHeight: matches860 ? '80vh' : matches600 ? '750px' : '600px', position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Group position="center" spacing={100}>
                <div style={{maxWidth: '500px'}}>
                    <div style={{maxHeight: matches600 ? '120px' : '70px', marginLeft: 10}}>
                        <Text
                            align="left"
                            variant="gradient"
                            gradient={{ from: 'green', to: 'blue', deg: 135 }}
                            size="xl"
                            weight={700}
                            style={{ fontFamily: 'Greycliff CF, sans-serif', fontSize: matches600 ? '52px' : '1.7rem'}}
                        >
                            We <span style={{fontWeight: 800, textDecoration: 'underline'}}>Innovate</span>
                        </Text>
                        <Text
                            align="left"
                            variant="gradient"
                            gradient={{ from: 'green', to: 'blue', deg: 135 }}
                            size="xl"
                            weight={700}
                            style={{ fontFamily: 'Greycliff CF, sans-serif',
                                fontSize: matches600 ? '52px' : '1.7rem',
                                position: 'relative',
                                top: matches600 ? '-30px' : '-10px'}}
                        >
                            The Food Industry
                        </Text>
                    </div>
                    <Text mx={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo, sem at pharetra faucibus, nulla tortor convallis elit, vel ornare leo nunc eu risus.</Text>
                    <Button component={"span"} size={"md"} radius={"md"} variant={"outline"} color={'green'} m={15} ml={7}>Contact Us</Button>
                    <Button component={"span"} size={"md"} radius={"md"} variant={"filled"} color={'green'} m={15} ml={7}>Our Partnerships</Button>
                </div>
                <div>
                    <div style={{marginLeft: matches860 ? 50 : 5, marginRight: matches860 ? 50 : 5}}>
                        <ImageN src={foodtechSVG} width={600}/>
                    </div>
                </div>
            </Group>
        </div>
    )
}

export default Hero;