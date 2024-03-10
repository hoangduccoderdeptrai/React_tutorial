import Section from "./Section";
import { benefit } from "../constants";



const Benefits = () => {
  return (
    <Section className={'pt-6rem m relative z-1'} id='benefit'>
        <h2 className="h2 text-center md:max-w-md mx-auto lg:max-w-xl">Chat Smarter,Not Harder with Brainwave</h2>
        <div className="pt-[4rem] relative flex justify-center container">
            <ul className="relative grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
              {benefit.map((item)=>(
                  <li key={item.id} className="relative h-auto grid justify-center items-center p-8 bg-no-repeat bg-[length:100%_100%] overflow-hidden cl" style={{backgroundImage:`url(${item.backgroundUrl})`}}>
                    <div className="relative z-2">
                      <h6 className="h5 leading-[4rem] font-semibold">{item.title}</h6>
                      <p>{item.text}</p>
                    </div>
                    <div className="flex justify-between items-center mt-[50px]">
                      <img src={item.iconUrl}/>
                      <div className="flex items-center">
                        <label>EXPLORE MORE</label>
                        <i className='bx bx-chevron-right text-2xl'></i>
                      </div>
                    </div>
                    <div className="absolute inset-0 z-0 opacity-5 transition-opacity overflow-hidden cc">
                      <img src={item.imageUrl} className="object-cover w-full h-full" />
                    </div>
                   
                  </li>
              ))}
            </ul>
        </div>
    </Section>
  )
}

export default Benefits
