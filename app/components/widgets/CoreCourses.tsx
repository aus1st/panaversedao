import { title } from "process";
import React from "react";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import QuarterBox from "./QuarterBox";
import { QtrBox } from "@/app/models/QtrBox";

const qtrBoxex: QtrBox[] = [
  {
    title: "Quarter I",
    desc: "CS-101: Object-Oriented Programming using TypeScript",
    qtrNum: 1,
    haveBorder: true,
  },
  {
    title: "Quarter II",
    desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    qtrNum: 2,
    haveBorder: true,
  },
  {
    title: "Quarter III",
    desc: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    qtrNum: 3,
    haveBorder: true,
  },
];

export default function CoreCourses() {
  const para = "Core Courses \n(Common in All Specializations):";
  return (
    <section>
      <Wrapper>
        <div className="max-w-screen-sm mt-24 relative">
          <h4 className="text-teal-800 font-semibold text-lg">
            Program of Studies
          </h4>
          <h2 className="text-3xl font-bold whitespace-pre-line">{para}</h2>
          <p className="mt-4 text-lg text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <Button text={"Learn More"} />

     {/* bg div */}
          <div className="absolute -top-[420px] -left-36">
            <svg
              width="730"
              height="1315"
              viewBox="0 0 730 1315"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_0_1)">
                <circle
                  cx="72.5"
                  cy="657.5"
                  r="157.5"
                  fill="#05C19C"
                  fillOpacity="0.6"
                />
              </g>
              <g filter="url(#filter1_f_0_1)">
                <circle
                  cx="72.5"
                  cy="657.5"
                  r="157.5"
                  fill="#05C19C"
                  fillOpacity="0.6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_1"
                  x="-585"
                  y="0"
                  width="1315"
                  height="1315"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="250"
                    result="effect1_foregroundBlur_0_1"
                  />
                </filter>
                <filter
                  id="filter1_f_0_1"
                  x="-585"
                  y="0"
                  width="1315"
                  height="1315"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="250"
                    result="effect1_foregroundBlur_0_1"
                  />
                </filter>
              </defs>
            </svg>
          </div>

        </div>



        <div className="flex flex-col max-w-screen-2xl items-stretch mx-auto sm:flex-row gap-y-4 sm:gap-x-6 mt-20">
         
     

       

          {/* Quarter boxex  */}
          {qtrBoxex.map((box, i) => (
            // eslint-disable-next-line react/jsx-key
            <QuarterBox key={i} {...{ qtrBox: box }} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
