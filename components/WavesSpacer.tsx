import Image from "next/image";
import waves from "../public/waves.svg";
import wave from "../public/wave.svg";

const WavesSpacer = () => {
    return (
        <>
            <Image src={waves} alt={"waves"} layout={"responsive"}/>
            <div style={{position: "relative", top: '-5px'}}>
                <Image src={wave} alt={"waves"} layout={"responsive"}/>
            </div>
        </>
    )
}

export default WavesSpacer;