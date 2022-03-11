import Hero from "./Hero";
import AboutUs from "./AboutUs";
import WavesSpacer from "./WavesSpacer";
import {NextComponentType} from "next";
import {Divider} from "@mantine/core";



const Main: NextComponentType = (props?: Object) => {

    return(
        <>
            <Hero/>
            <WavesSpacer/>
            <AboutUs/>
            <Divider color={"green"} size={10}/>
            <Divider color={"teal"} size={13}/>
            <Divider color={"cyan"} size={16}/>

        </>
    )
}

export default Main;