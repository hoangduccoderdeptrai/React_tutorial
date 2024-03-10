
import loading from '../assets/loading.png'
const Generating = ({className}) => {
  return (
    <div className={`${className||''} flex px-6 bg-n-8/80 h-[3.5rem] rounded-[1.7rem] items-center gap-2`}>
        <img className='' width={20} height={20} src={loading}/>
        <span>AI is generation</span>
    </div>
  )
}

export default Generating
