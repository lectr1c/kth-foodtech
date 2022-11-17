import {Button, Group, Text} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import ImageN from 'next/image';
import foodtechSVG from '../public/foodtechIllustration.svg';
import {useEffect, useState} from "react";
import SchemeToggler from "./SchemeToggler";
import {NextComponentType} from "next";
import styles from "../styles/Home.module.css";


const Hero : NextComponentType = (props) => {

    const [matches800, set800] = useState(true);
    const [matches600, set600] = useState(true);

    const { width } = useViewportSize();

    useEffect(() => {
        set800(window.matchMedia('(min-width: 800px)').matches);
        set600(window.matchMedia('(min-width: 600px)').matches);
    }, [width])

    return (
        <div style={{width: '100%', minHeight: matches800 ? '80vh' : '400px', position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
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
                            <span style={{fontWeight: 800, textDecoration: 'underline'}}>Innovation</span> in
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
                    <Text mx={10} size={18}>Our mission is to connect KTH students to the amazing and fast paced world of Foodtech as well as inspire them to make greener food.</Text>
                    <Button component={"a"} href={"#contact"} size={"md"} radius={"sm"} variant={"outline"} color={'green'} m={15} ml={7}>Contact Us</Button>
                    <Button component={"a"} href={"/events"} radius={"sm"} variant={"filled"} color={'green'} m={15} ml={7}>Our Partnerships</Button>
                </div>
                <div>
                    <div style={{
                        marginLeft: matches800 ? 50 : 5, marginRight: matches800 ? 50 : 5,
                        display: matches800 ? "inherit" : "none"
                    }}>
                        <ImageN className={styles.labImage} src={foodtechSVG}/>
                    </div>
                </div>
            </Group>
        </div>
    )
}

export default Hero;