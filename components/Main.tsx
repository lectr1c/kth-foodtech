import Hero from "./Hero";
import AboutUs from "./AboutUs";
import WavesSpacer from "./WavesSpacer";
import Staff from "./Staff";
import ContactUs from "./ContactUs"
import {NextComponentType} from "next";
import {Divider} from "@mantine/core";
import Partners from "./Partners";



const Main: NextComponentType = (props?: Object) => {

    return(
        <>
            <Hero/>
            <WavesSpacer/>
            <Partners/>
            <AboutUs/>
            <Divider color={"green"} size={10}/>
            <Divider color={"teal"} size={13}/>
            <Divider color={"cyan"} size={16}/>
            <Staff/>
            <WavesSpacer/>
            <ContactUs/>
        </>
    )
}

export default Main;