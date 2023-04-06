import Link from 'next/link'
import Logo from '/public/images/logo.png'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'

const Header = () => {
  return (
    <Wrapper>
    <header className="flex items-center justify-between bg-white sticky py-4 top-0">
    <div>
      <Image 
      src={Logo} 
      alt="panaverse dao logo"
      ></Image>
      </div> 
     <ul className="flex space-x-8 font-medium">
        <Link href="/" >Home</Link>
        <Link href="/courses" >Courses</Link>
     </ul>
    </header>
    </Wrapper>
  )
}

export default Header
