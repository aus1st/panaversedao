import React from "react";
import Wrapper from "../shared/Wrapper";
import outcome from "../../assets/images/outcome.png";
import Image from "next/image";

const bullets = [
  "Product Ownership",
  "Freelacing",
  "Global Marketing by DAO",
  "Boosting Economy",
];

export default function PrgOutcome() {
  return (
    <section className="mt-10 md:mt-28">
      <Wrapper>
        <div className="flex items-center gap-x-10 flex-col-reverse md:flex-row">
          <div className="flex-1">
            <Image src={outcome} alt="outcome image"></Image>
          </div>
          <div className="flex-1 relative">
            <h2 className="font-bold text-4xl">
              The Outcome for Participants of the Program
            </h2>
            <p className="text-slate-600 text-lg mt-8">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan software exports
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-2 gap-y-6">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-x-2">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3431 2.65686C20.4673 -0.467337 25.5327 -0.46734 28.6569 2.65685L43.3431 17.3431C46.4673 20.4673 46.4673 25.5327 43.3431 28.6569L28.6569 43.3431C25.5327 46.4673 20.4673 46.4673 17.3431 43.3431L2.65686 28.6569C-0.467337 25.5327 -0.46734 20.4673 2.65685 17.3431L17.3431 2.65686Z"
                      fill="url(#paint0_radial_0_1)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 21.9206C16.0707 22.3461 18.734 23.1698 20.75 24.465C23.1178 21.3345 27.371 18.406 32 16C27.6042 20.2739 23.9668 25.1236 21.5 30C19.5118 27.2129 17.3398 24.6189 14 21.9206Z"
                      fill="white"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_0_1"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(13.5455 -9.96429) rotate(59.1918) scale(77.3011 169.686)"
                      >
                        <stop offset="0.125" stopColor="#00E1F0" />
                        <stop offset="1" stopColor="#00616C" />
                      </radialGradient>
                    </defs>
                  </svg>

                  <h3 className="text-lg font-semibold">{bullet}</h3>
                </div>
              ))}
            </div>

            {/* bg div */}
            <div className="absolute -top-[420px] -right-32">
              <svg
                width="699"
                height="1085"
                viewBox="0 0 699 1085"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_1_42)">
                  <circle
                    cx="657.5"
                    cy="657.5"
                    r="157.5"
                    fill="#05C19C"
                    fillOpacity="0.6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_42"
                    x="0"
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
                      result="effect1_foregroundBlur_1_42"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
