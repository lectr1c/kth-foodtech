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
                    <Divider color={"dark"} size={"sm"} my={20} mx={100}/>
                    <Text weight={300} align={matches600 ? "center" : "left"} sx={{paddingBottom: '7vw'}}>
                    This is a student- led THS organization that aims to benefit both fellow peers and the industry as a whole.
                     By educating the student population in why Foodtech is relevant and hosting events to connect companies with the future of the industry,
                      we hope to facilitate new opportunities and innovation. Our goal is simple: welcome students into the exciting world 
                      of Foodtech and match their talents with the companies that lead it. Contact us today to know more!
                    </Text>
                </div>
            </Group>
        </div>
    )
}

export default AboutUs;