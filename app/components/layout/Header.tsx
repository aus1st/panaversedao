import Link from 'next/link'
import Logo from '/public/images/logo.png'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'

const Header = () => {
  return (
    <header className='top-0 z-10 sticky '>
    <Wrapper>
    <div className="flex items-center justify-between bg-white backdrop-blur-md bg-opacity-90  py-4 ">
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
    </div>
    </Wrapper>
    </header>
  )
}

export default Header
