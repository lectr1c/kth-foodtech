import {useListState, useViewportSize} from "@mantine/hooks";
import styles from "../styles/Home.module.css";
import {Text} from "@mantine/core";
import {useEffect, useState} from "react";

const Partners = () => {
    const [partners, setPartners] = useListState([{logo: "https://chouchou.se/wp-content/uploads/2022/02/CHOU_logo_black.png"}, {logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Arla_Foods_logo.svg/1200px-Arla_Foods_logo.svg.png"}, {logo: "https://events.swedenfoodtech.com/wp-content/uploads/2019/07/Sweden-Food-Tech-Logo.png"}]);

    const [matches860, set860] = useState(true);
    const [matches600, set600] = useState(true);

    const { width } = useViewportSize();

    useEffect(() => {
        set860(window.matchMedia('(min-width: 800px)').matches);
        set600(window.matchMedia('(min-width: 600px)').matches);
    }, [width])


    return (
        <>
            <Text className={styles.Title} variant={"gradient"} gradient={{from: 'teal', to: 'cyan', deg: 180}} weight={400} mb={-20} style={{fontSize: matches600 ? "52px" : "32px"}}>Past Partnerships</Text>
            <div className={styles.partnersContainer}>
                {partners.map(partner => {
                    return (
                        <div className={styles.partnerCard} key={partner.logo}>
                            <img src={partner.logo} alt={" "}/>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Partners;