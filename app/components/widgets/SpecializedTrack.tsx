"use client";
import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import QuarterBox from "./QuarterBox";
import { programsData } from "@/app/models/QtrBox";
import Image from "next/image";

export default function SpecializedTrack() {
  const header = "Web 3.0 (Blockchain) and Metaverse \nSpecialization";
  const [selectedItem, selectItem] = useState("wmd");

  const prgItem = programsData.find((i) => i.slug === selectedItem);

  console.log(prgItem);
  return (
    <div>
      <Wrapper>
        {/* Header*/}

        <div className="max-w-screen-sm mt-24">
          <h3 className="text-3xl font-bold">Specialized Tracks:</h3>
          <p className="mt-4 text-lg text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>

        {/* left */}
        <div className="flex flex-col-reverse lg:flex-row  mt-10 gap-x-4 gap-y-5">
          <div className="border self-start basis-8/12 top-28 sticky border-slate-200 shadow-xl  rounded-xl py-8 px-6">
            <h4 className="text-primary font-semibold text-xl">
              Specialized Program
            </h4>
            <h3 className="text-2xl whitespace-pre-line font-semibold  mt-2">
              {prgItem?.title}
            </h3>
            <p className="mt-3 text-slate-600">{prgItem?.desc}</p>
            <button className="flex gap-x-1 items-end text-teal-800 font-semibold text-lg underline">
              Learn more
              <svg
                className="mb-1.5"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="flex flex-col sm:flex-row gap-x-2 mt-10">
              {prgItem?.qtrs.map((q) => (
                <QuarterBox
                  key={q.title}
                  qtrBox={{
                    title: q.title,
                    desc: q.desc,
                    qtrNum: q.number,
                    haveBorder: false,
                  }}
                />
              ))}
            </div>
          </div>

          {/* right */}
          <div className="py-6 px-4 flex-1 space-y-4  basis-4/12">
            {programsData.map((item, i) => {
              return (
                <div key={i}>
                <div
                  onClick={() => selectItem(item.slug)}
                  
                  className="flex gap-x-4 items-center cursor-pointer"
                >
                  <div className="flex-shrink-0 h-20 w-30">
                    {/* <div className='w-20 h-16 bg-red-200 rounded-md'></div> */}
                    <Image
                      src={item.image}
                      className={"object-cover rounded-sm "}
                      alt={item.title}
                    />
                  </div>

                  <div>
                    <h4 className="text-primary font-medium">
                      Specialized Program
                    </h4>
                    <h3 className="font-semibold text-md">{item.title}</h3>
                  </div>
                  
                </div>
                <div className="w-full border-b bg-slate-200 mt-5"></div>
           </div>
              );
            })}

            {/* underline */}
          
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
