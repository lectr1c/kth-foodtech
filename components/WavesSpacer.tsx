import Image from "next/image";
import waves from "../public/waves.svg";

const WavesSpacer = () => {
    return (
        <div>
            <Image src={waves} alt={"waves"} layout={"responsive"}/>
        </div>
    )
}

export default WavesSpacer;