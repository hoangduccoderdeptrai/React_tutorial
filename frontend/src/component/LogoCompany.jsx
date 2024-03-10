
import {logo} from '../constants/index'
const LogoCompany = ({className}) => {
  return (
    <div className={className}>
        <h5 className="text-xl font-semibold flex items-center justify-center">HELPING PEOPLE CREATE BEAUTIFUL CONTENT AI</h5>
        <div>
            <ul className='flex gap-8 items-center my-8  justify-center'>
              {logo.map((item)=>(
                <li key={item.key} className='flex justify-center items-center flex-1 h-[rem]'>
                  <img className='' width={134} height={134} src={item.url}/>
                </li>
              ))}
              
             
              

            </ul>

        </div>
    </div>
  )
}

export default LogoCompany
