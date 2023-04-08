import { QtrBox } from '@/app/models/QtrBox'
import React, { FC } from 'react'

const QuarterBox:FC<{qtrBox: QtrBox}> = ({qtrBox}) => {
  return (
    <>     
     {/* box */}
      <div  className={`py-16 flex flex-col justify-center rounded-md px-8 relative  flex-1 md:w-4/12 ${qtrBox.haveBorder&&'border'}`}>
      
      {/* title */}
      <p className='font-bold'>{qtrBox.title}</p>
      {/* desc  */}
      <p className='text-slate-600 mt-2'>{qtrBox.desc}</p>
      {/* num  */}
      <div className='absolute right-10  text-[170px] text-gray-200 font-bold -top-8 -z-10'>{qtrBox.qtrNum}</div>
      </div>
      </>

  )
}

export default QuarterBox
