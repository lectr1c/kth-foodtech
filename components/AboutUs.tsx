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
            backgroundColor: scheme === 'dark' ? theme.colors.dark[4] : theme.colors.dark[2],
            width: '100%',
            minHeight: '50vh',
            position: 'relative',
            marginTop: matches860 ? '-50px' : '-30px',
            zIndex: -1,
            color: "black",
        }}>
            <Group direction={"column"} align={"center"} style={{ top: '30%', position: "relative"}} mx={matches860 ? 50 : 10}>
                <Text variant={"gradient"} weight={600} gradient={{from: "green", to: "yellow", deg: 190}} mb={-20} style={{fontSize: matches600 ? "52px" : "32px"}}>About Us</Text>
                <div>
                    <Text weight={700} mb={0} align={"center"}>Our mission is to connect KTH students to the amazing and fast paced world of Foodtech as well as inspire them to make greener food choices</Text>
                    <Divider color={"dark"} size={"sm"} my={10}/>
                    <Text weight={500} align={"center"}>Make Foodtech mainstream by educating the students of KTH how Foodtech could be the main driver to save the planet as well as show how exciting food technology is

                        Inspire students to be part of this incredibly fast growing and vibrant industry and match their talents with awesome Foodtech companies

                        Showcase how many different amazing plant-based food options we have today by letting the students get first-hand experience in order to make it easier to make greener food choices.
                    </Text>
                </div>
               </Group>


        </div>
    )
}

export default AboutUs;