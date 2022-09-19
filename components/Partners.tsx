import {useListState} from "@mantine/hooks";
import styles from "../styles/Home.module.css";

const Partners = () => {
    const [partners, setPartners] = useListState([{logo: "https://chouchou.se/wp-content/uploads/2022/02/CHOU_logo_black.png"}, {logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Arla_Foods_logo.svg/1200px-Arla_Foods_logo.svg.png"}, {logo: "https://events.swedenfoodtech.com/wp-content/uploads/2019/07/Sweden-Food-Tech-Logo.png"}]);

    return (
        <div className={styles.partnersContainer}>
            {partners.map(partner => {
                return (
                    <div className={styles.partnerCard} key={partner.logo}>
                        <img src={partner.logo} alt={" "}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Partners;