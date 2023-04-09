import React from "react";
import Link from "next/link";

const menuItems = [
  {
    slug: "wmd",
    name: "Web 3.0 and Metaverse Developer",
    path: "/wmd",
  },
  {
    slug: "ai",
    name: "Artificial Intelligence",
    path: "/ai",
  },
  {
    slug: "cnc",
    name: "Cloud-Native Computing",
    path: "/cnc",
  },
  {
    slug: "iot",
    name: "Ambient Computing and IoT",
    path: "/iot",
  },
  {
    slug: "bio",
    name: "Genomics and Bioinformatics",
    path: "/bio",
  },
  {
    slug: "npa",
    name: "Network Programmability and Automation",
    path: "/npa",
  },
];

export default function DropDown() {
  return (
    
      <div className="absolute right-0 pt-4">
        <ul className="flex bg-white flex-col rounded-b group-hover:shadow group-hover:py-2 group-hover:border border-transparent duration-500 group-hover:border-slate-200 group-hover:max-h-60 max-h-0 overflow-hidden">
          {menuItems.map((m) => (
            <li className="px-3 py-2 whitespace-pre text-14 cursor-pointer  hover:bg-slate-100 duration-300 text-gray-600" key={m.slug}>
              <Link className="cursor-pointer" href={m.path} />
              {m.name}
            </li>
          ))}
        </ul>
      </div>
    
  );
}
