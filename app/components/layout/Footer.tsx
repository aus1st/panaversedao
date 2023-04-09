import React from "react";
import Wrapper from "../shared/Wrapper";
import Logo from "/public/images/logo.png";
import Image from "next/image";
import { menuItems } from "@/app/models/QtrBox";
import Link from "next/link";

export default function Footer() {
  return (
    <Wrapper>
      <footer>
        <div className=" mt-10 flex gap-x-10">
          <div className="w-6/12">
            <Image src={Logo} alt="Panaverse logo" />
            <p className="mt-5 max-w-screen-sm text-lg text-slate-600">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </p>

            <ul className="flex">
                <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="text-white h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
              </li>
              <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-white h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
              </li>
            </ul>
          </div>
          <div className="w-4/12">
            <h3 className="text-xl font-bold mb-3">Programs</h3>
            <ul className="space-y-3">
              {menuItems.map((m) => (
                <li className="" key={m.slug}>
                  <Link className="cursor-pointer" href={m.path}>
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/12">right</div>
        </div>
      </footer>
    </Wrapper>
  );
}
