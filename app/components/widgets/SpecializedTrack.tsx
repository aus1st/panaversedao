import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import QuarterBox from './QuarterBox'

export default function SpecializedTrack() {
    const header = 'Web 3.0 (Blockchain) and Metaverse \nSpecialization'
  return (
    <div>
        <Wrapper>
      {/* Header*/}

<div className='max-w-screen-sm mt-24'>
  <h3 className='text-3xl font-bold'>Specialized Tracks:</h3>
  <p className='mt-4 text-lg text-slate-600'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
</div>

{/* left */}
<div className='flex mt-10 gap-x-4 gap-y-5'>
<div className='border basis-8/12 border-slate-200 shadow-xl  rounded-xl py-8 px-6'>
    <h4 className='text-teal-800 text-xl'>Specialized Program</h4>
    <h3 className='text-2xl whitespace-pre-line font-semibold  mt-2'>{header}</h3>
    <p className='mt-3 text-slate-600'>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
</p>
<button className="flex gap-x-1 items-end text-teal-800 font-semibold text-lg underline">Learn more
<svg className='mb-1.5' width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
</svg>

</button>
<div className='flex gap-x-2 mt-10'>
<QuarterBox qtrBox={{title:"Quarter IV",desc:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",qtrNum:4,haveBorder:false}}/>
<QuarterBox qtrBox={{title:"Quarter V",desc:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",qtrNum:5,haveBorder:false}}/>
</div>
</div>

{/* right */}
<div className='py-6 px-4 bg-slate-100 basis-4/12'>
<div className='flex gap-x-4 items-center'>

    <div className='w-20 h-16 bg-red-200 cursor-pointer rounded-md'></div>
    <div>
       <h4 className='text-primary font-medium'>Specialized Program</h4>
       <h3 className='font-semibold text-xl'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
    </div>
    
</div>
{/* underline */}
<div className='border border-slate-300 mt-2'></div>

</div>
</div>
        </Wrapper>
      
    </div>
  )
}
