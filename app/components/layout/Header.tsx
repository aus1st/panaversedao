import Link from "next/link";
import Logo from "/public/images/logo.png";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import DropDown from "./DropDown";
import { menuItems } from "@/app/models/QtrBox";

const Header = () => {
  return (
    <header className="top-0 z-10 sticky ">
      <Wrapper>
        <div className="flex items-center justify-between bg-white backdrop-blur-md bg-opacity-90  py-4 ">
          <div>
            <Image src={Logo} alt="panaverse dao logo"></Image>
          </div>
          <ul className="flex space-x-8 font-medium items-center">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li className="relative group cursor-pointer hover:text-primary ">
              <div className="flex items-center">
                <p>Courses</p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-gray-700 group-hover:text-primary mt-0.5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
                  </g>
                </svg>
              </div>

              <div className="absolute right-0 pt-4">
                <ul className="flex bg-white flex-col rounded-b group-hover:shadow group-hover:py-2 group-hover:border border-transparent duration-500 group-hover:border-slate-200 group-hover:max-h-60 max-h-0 overflow-hidden">
                  {menuItems.map((m) => (
                 
                      <Link  className="px-3 py-2 whitespace-pre font-normal cursor-pointer  hover:bg-slate-100 duration-300 text-gray-600"
                      key={m.slug} href={m.path} >
                      {m.name}</Link>
                    
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
