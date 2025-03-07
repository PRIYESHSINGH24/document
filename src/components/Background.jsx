import React from 'react';

function Background() {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='w-full py-10 absolute top-[5%] flex justify-center text-zinc-600 font-semibold text-xl'>
          Documents
        </div>

        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 text-[12vw] leading-none tracking-tighter'>
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
