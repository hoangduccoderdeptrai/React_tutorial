
import image1 from '../assets/hero/image-1.png'
import image2 from '../assets/hero/image-2.png'
import image3 from '../assets/hero/image-3.png'



const Notification = ({className}) => {
  

  return (
   
    <div className={`${className} gap-6 bg-n-9/40 border border-n-1 rounded-2xl p-3 `}>
     
      <img src={image1} width={62} height={62} alt='image_1' className='rounded-xl'/>
        
      <div className='grid-cols-1'>
        <div>
            <p className='font-semibold text-base'>Code generation</p>
        </div>
        <div className='relative flex '>
          <ul className='flex gap-2 '>
            <li className='rounded-full overflow-hidden'>
              <img src={image2} width={20} height={20} alt='image_2' className='w-full'/>
            </li>
            <li className='rounded-full overflow-hidden'>
              <img src={image2} width={20} height={20} alt='image_2' className='w-full'/>
            </li>
            <li className='rounded-full overflow-hidden'>
              <img src={image3} width={20} height={20} alt='image_3' className='w-full'/>
            </li>
          </ul>
            
           
        </div>
       
      </div>
    </div>
  )
  // return (
  //   <div
  //     className={`${
  //       className || ""
  //     } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
  //   >
  //     <img
  //       src={image1}
  //       width={62}
  //       height={62}
  //       alt="image"
  //       className="rounded-xl"
  //     />

  //     <div className="flex-1">
  //       <h6 className="mb-1 font-semibold text-base">Hello everyone</h6>

  //       <div className="flex items-center justify-between">
  //         <ul className="flex -m-0.5">
           
  //             <li
  //               key='1'
  //               className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
  //             >
  //               <img
  //                 src={image2}
  //                 className="w-full"
  //                 width={20}
  //                 height={20}
  //                 alt='image1'
  //               />
  //             </li>
  //             <li
  //               key='2'
  //               className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
  //             >
  //               <img
  //                 src={image2}
  //                 className="w-full"
  //                 width={20}
  //                 height={20}
  //                 alt='image1'
  //               />
  //             </li>
            
  //         </ul>
  //         <div className="body-2 text-n-13">1m ago</div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Notification
