import PageWrapper from '@/components/PageWrapper'
import React from 'react'

function page() {
  return (
    <div>
      <PageWrapper gradient="from-amber-100 to-amber-200" fontColor="text-amber-900">
        <div className="flex flex-col justify-center items-center">
            <h1 className='text-5xl tracking-wide py-10'>ABOUT</h1>
        <p className='text-center max-w-[400px] text-lg'>
          This website was made to give students all the formulas, tips and
          tricks i have learned over the years that just made math so simple and
          easy. If you would like to suggest any content or corrections, feel
          free to email!
        </p>
        </div>
      </PageWrapper>
    </div>
  );
}

export default page