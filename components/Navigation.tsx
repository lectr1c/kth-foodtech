import {NextComponentType} from "next";
import {Button, Grid, MantineTheme, Drawer, Burger} from "@mantine/core";
import logo from "../public/logo.svg";
import darklogo from "../public/blacklogo.svg";
import Image from "next/image";
import {Group, useMantineTheme, MantineProvider, ColorScheme} from "@mantine/core";
import {useEffect, useState} from "react";
import {useViewportSize} from "@mantine/hooks";


const Navigation: NextComponentType = () => {

    const theme = useMantineTheme();

    const [matches600, set600] = useState(true);
    const { width } = useViewportSize();
    useEffect(() => {
        set600(window.matchMedia('(min-width: 600px)').matches);
    }, [width])

    const buttons = ['Partnerships', 'Events'];
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <div style={{width: '100%'}}>
            <div id={"navbar"} style={{width: '100%', height: '60px', backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[6] : theme.white, marginBottom: '20px', boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.50)'}}>
                <Group align={"center"} position={"apart"} sx={{height: '100%', justifyContent:"space-between"}} px={'10vw'} noWrap>
                    <a style={{display: "inline-block", verticalAlign: "middle", maxHeight: '60px', maxWidth: '180px', minWidth: '100px', position: "relative", marginTop: '5px'}}>
                        <Image
                           src={theme.colorScheme == 'dark' ? logo : darklogo }
                           alt="KTH Foodtech logo"
                        />
                    </a>
                    <div>
                    {buttons.map((value =>
                            <Button key={value} size={"sm"} color={"dark"} variant={"subtle"}  style={{display: matches600 ? "inline-block" : "none", verticalAlign: "middle"}}>{value}</Button>
                    ))}
                        <Burger
                            sx={{
                                visibility: matches600 ? "hidden" : "visible"
                            }}
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            title={title}/>
                    </div>
                </Group>
            </div>
            <Drawer position={"top"} opened={opened} onClose={() => setOpened(false)}>
                {buttons.map((value =>
                        <div key={value}>
                            <a href={"/"+value.toLowerCase()}>{value}</a>
                        </div>
                ))}
            </Drawer>
        </div>
    )
}

export default Navigation;