import {Box, Center, Container, Divider, Group, Text, Title, useMantineTheme} from "@mantine/core";
import {useEffect, useState} from "react";
import {useViewportSize} from "@mantine/hooks";

const AboutUs = () => {

    const [matches860, set860] = useState(true);
    const [matches600, set600] = useState(true);

    const { width } = useViewportSize();

    useEffect(() => {
        set860(window.matchMedia('(min-width: 800px)').matches);
        set600(window.matchMedia('(min-width: 600px)').matches);
    }, [width])


    const theme = useMantineTheme();
    const scheme = theme.colorScheme;
    return (
        <div style={{
            width: '100%',
            position: 'relative',
            minHeight: 'auto',
            marginTop: matches860 ? '-60px' : '-20px',
            zIndex: -1,
            color: scheme === "dark" ? "white" : "black",
            paddingBottom: 100
        }}>
            <Group position={"center"} style={{ top: matches600 ? '110px' : '70px', margin: "auto", position: "relative", width: matches860 ? '70vw' : '90vw'}}>
                <Text color={"light"} weight={300} mb={-20} style={{fontSize: matches600 ? "52px" : "32px"}}>About Us</Text>
                <div>
                    <Text weight={400} mb={0} align={"center"}>Our mission is to connect KTH students to the amazing and fast paced world of Foodtech as well as inspire them to make greener food choices</Text>
                    <Divider color={"dark"} size={"sm"} my={20} mx={100}/>
                    <Text weight={300} align={matches600 ? "center" : "left"} sx={{paddingBottom: '7vw'}}>Make Foodtech mainstream by educating the students of KTH how Foodtech could be the main driver to save the planet as well as show how exciting food technology is

                        Inspire students to be part of this incredibly fast growing and vibrant industry and match their talents with awesome Foodtech companies

                        Showcase how many different amazing plant-based food options we have today by letting the students get first-hand experience in order to make it easier to make greener food choices.
                    </Text>
                </div>
            </Group>
        </div>
    )
}

export default AboutUs;