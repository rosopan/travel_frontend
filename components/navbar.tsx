import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="relative flexBetween max-container 
    padding-container py-5 z-30">
     <Link href="/">
       <Image src="/hilink-logo.svg" alt="logo" width={79} height={29} />
     </Link>

      <ul className="lg:flex h-full gap-10 hidden">
         {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-600 hover:font-bold transition-all cursor-pointer pb-1.5 flexCenter">
           {link.label}
          </Link>
         ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
         type='button'
         title='Login'
         icon="/user.svg"
         variant="btn_dark_green"/>
      </div>
 
      <Image 
        src='menu.svg'
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden cursor-pointer inline-block"
      />     
    </nav>
  )
}

export default Navbar