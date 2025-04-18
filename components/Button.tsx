import Image from "next/image";

type ButtonProps={
  type:'submit'|'button';
  title:string;
  icon?:string;
  variant:string;
  full?:boolean;
}


const Button = ({type,title,variant,icon,full}:ButtonProps) => {
  return (
    <button className={`flexCenter rounded-full gap-3 border ${variant} 
    ${full && 'w-full'}` }
    type={type} >
        {icon && <Image src={icon} alt={title} width={24} height={24} /> }
        <label className="bold-16 whitespace-nowrap cursor-pointer">
            {title}
        </label>
    </button>
  )
}

export default Button