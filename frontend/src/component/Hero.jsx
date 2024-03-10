// Note if export default then not using curly brackets
// otherwise using curly brackets
// example : export const a ={b,c,d} when import using import {a}

import Section from "./Section"
import Button from './button'
import curve from '../assets/hero/curve.png'
import robot from '../assets/hero/robot.jpg'
import heroBackground from '../assets/hero/hero-background.jpg'
import { ScrollParallax} from "react-just-parallax"
import Notification from "./Notification";
import Generating from "./Generating"
import LogoCompany from "./LogoCompany"
const Hero = () => {
  
    // const parallaxRef = useRef(null);
    return (
      <Section
        className="pt-[12rem] -mt-[5.5rem] z-1"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" >
          <div className="relative grid justify-center items-center mx-6 z-1">
            <h1 className="text-center h1 mb-6">Explore the Possibilities of AI Chatting with {' '}
              <span className="inline-block h1">
                Brainwave
                <img className="absolute w-[200px]  " src={curve}/>
              </span>
            </h1>
            <p className="text-center">Unleash the power of AI within Brainwave.Upgrade your productivity with Brainwave, the open AI chat app</p>
            <Button className={'w-[150px] h-16  flex mx-auto mt-6 items-center'}>
                <p>GET STARTED</p>
            </Button>
          </div>

          <div className="relative mx-auto max-w[23rem] mt-12  md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[2rem]  ">
                <div className="bg-n-10 rounded-[0.9rem] overflow-hidden ">
                  <div className="overflow-hidden mb-[20px] aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490]">
                   
                    <img src={robot} className="w-full scale-[1.7] md:scale-[1] md:-translate-y-[8%]" width={1024} height={490} alt="AI"/>
                    <Generating className={`absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2`}/>
                    <ScrollParallax isAbsolutelyPositioned strength={0.16} lerpEase={0.07}>
                      <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                        
                          <li className="p-5">
                            <i className='bx bx-home-alt-2'></i>
                          </li>
                          <li className="p-5">
                            <i className='bx bx-home-alt-2'></i>
                          </li>
                          <li className="p-5">
                            <i className='bx bx-home-alt-2'></i>
                          </li>
                          <li className="p-5">
                            <i className='bx bx-home-alt-2'></i>
                          </li>
                        
                      </ul>
                    </ScrollParallax>
                    <ScrollParallax isAbsolutelyPositioned>
                      <Notification className='absolute -right-[5.5rem] bottom-[11rem] w-[18rem] flex'/>
                    </ScrollParallax>
                    

                    {/* <ScrollParallax isAbsolutelyPositioned>
                      <Notification
                        className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                        title="Code generation"
                      />
                    </ScrollParallax> */}
                  </div>
                    
                </div>
              </div>

            </div>
            <div className="absolute w-[234%] -top-[54%] left-[50%] -translate-x-1/2 md:w-[138%] lg:-top-[104%]  ">
              <img src={heroBackground} className="w-full" width={1440} height={1800} alt="hero"/>
            </div>
          </div>
          <LogoCompany className={'hidden md:block relative mt-20 z-3'}/>
        </div>
         
      
  
        
      </Section>
    
    )
}

export default Hero
