import { title } from 'process'
import React from 'react'
import Button from '../shared/Button'
import Wrapper from '../shared/Wrapper'
import QuarterBox from './QuarterBox'
import { QtrBox } from '@/app/models/QtrBox'

const qtrBoxex: QtrBox[] = [
  {title: 'Quarter I', desc:"CS-101: Object-Oriented Programming using TypeScript", qtrNum:1,haveBorder:true },
  {title: 'Quarter II', desc:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform", qtrNum:2,haveBorder:true },
  {title: 'Quarter III', desc:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development", qtrNum:3,haveBorder:true },

]


export default function CoreCourses() {
    const para = "Core Courses \n(Common in All Specializations):"
  return (
    <section>
        <Wrapper>
            <div className='max-w-screen-sm mt-24'>
        <h4 className="text-teal-800 font-semibold text-lg">Program of Studies</h4>
      <h2 className="text-3xl font-bold whitespace-pre-line">{para}</h2>
      <p className="mt-4 text-lg text-slate-600">Every participant of the program will start by completing the following three core courses:</p>
    <Button text={"Learn More"}/>
    </div>
<div className='flex flex-col max-w-screen-2xl items-stretch mx-auto sm:flex-row gap-y-4 sm:gap-x-6 mt-20'>
{/* Quarter boxex  */}
{
  qtrBoxex.map((box)=>(
    
// eslint-disable-next-line react/jsx-key
<QuarterBox {...{qtrBox:box}}/>

  ))
}
</div>
    </Wrapper>
    </section>
  )
}
