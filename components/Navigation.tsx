import {NextComponentType} from "next";
import {Button, Grid, MantineTheme, MantineThemeOverride} from "@mantine/core";
import logo from "../public/logo.svg";
import Image from "next/image";
import {Group, useMantineTheme, MantineProvider, ColorScheme} from "@mantine/core";


const Navigation: NextComponentType = () => {

    const theme = useMantineTheme();

    return (
            <div style={{width: '100%', height: '60px', backgroundColor: theme.colors.dark[6], marginBottom: '20px'}}>
                <Group align={"center"} position={"apart"} sx={{height: '100%', justifyContent:"space-around"}} noWrap>
                    <Button size={"sm"} variant={"light"} color={"teal"} px={10} style={{ display: "inline-block", verticalAlign: "middle"}}>Partnerships</Button>
                    <a style={{display: "inline-block", verticalAlign: "middle", maxHeight: '60px', maxWidth: '180px', minWidth: '100px', position: "relative", marginTop: '5px'}}>
                        <Image
                           src={logo}
                           alt="KTH Foodtech logo"
                        />
                    </a>
                    <Button size={"sm"} variant={"subtle"}  style={{display: "inline-block", verticalAlign: "middle"}}>Events</Button>
                </Group>
            </div>
    )
}

export default Navigation;