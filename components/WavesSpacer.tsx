import Image from "next/image";
import waves from "../public/waves.svg";
import wave from "../public/wave.svg";

const WavesSpacer = () => {
    return (
        <div>
            <Image src={waves} alt={"waves"} layout={"responsive"}/>
            <Image src={wave} alt={"waves"} layout={"responsive"}/>
        </div>
    )
}

export default WavesSpacer;