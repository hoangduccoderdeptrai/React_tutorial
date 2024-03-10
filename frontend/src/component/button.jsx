
import card from '../assets/benefits/card-1.svg'
const Button =({className,href,px,children,white,onClick})=>{
    console.log(className,href,px,children,white)
    const classes =`${className?className:''} rounded-xl px-5 py-4 bg-[length:100%_100%] font-semibold`
    const reusable =()=>(
        <button className={classes} onClick={onClick} style={{backgroundImage:`url(${card})`}} >
            <span className="flex flex-col">{children}</span>
            {/* <h1 className="flex-auto ">cc cho</h1> */}
        </button>
    )
    const renderLink =()=>(
        <a className={classes} href={href}>
            <span >{children}</span>
        </a>
    )
    return href?renderLink():reusable()

}

export default Button