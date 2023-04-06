import Wrapper from "../shared/Wrapper"
import HeroPoster from '/app/assets/images/hero-poster.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex items-center">
                    {/* left side  */}
                    <div className="flex-1">
                        <h4 className="text-teal-800 font-semibold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className="text-6xl font-bold leading-[1]">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-4 text-lg text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
                        <p className="mt-4 text-lg text-slate-600">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
                   <button className="mt-5 px-5 py-2 bg-teal-800 text-white rounded-full font-semibold">Learn more</button>
                    </div>
                    <div className="flex-1">
                        {/* right side */}
                    <Image src={HeroPoster}
                        alt="Hero Poster"
                    ></Image>
                    </div>
                </div>
            </Wrapper>
        </section>

    )
}

export default Hero
