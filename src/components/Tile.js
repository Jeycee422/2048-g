import React from 'react'

function Tile({val}) {
  const valStyle = val === 2 ? 'bg-[#7CB5E2] shadow-b shadow-[#5FA5D9]'
    : val === 4 ? 'bg-[#4495D4] shadow-b shadow-[#397FB3]'
    : val === 8 ? 'bg-[#2F6895] shadow-b shadow-[#255174]'
    : val === 16 ? 'bg-[#F5BD70] shadow-b shadow-[#F3AE4F]'
    : val === 32 ? 'bg-[#F2A032] shadow-b shadow-[#CD8829]'
    : val === 64 ? 'bg-[#CD8829] shadow-b shadow-[#A87023]'
    : val === 128 ? 'bg-[#E37051] shadow-b shadow-[#DE5833]'
    : val === 256 ? 'bg-[#DE5833] shadow-b shadow-[#BD4A2B]'
    : val === 512 ? 'bg-[#BC4423] shadow-b shadow-[#9A3216]'
    : val === 1024 ? 'bg-[#5454DA] shadow-b shadow-[#4747B9]'
    : val === 2048 ? 'bg-[#3B3C99] shadow-b shadow-[#2E2E78]'
    : val > 2048 ? 'bg-[#3E228C] shadow-b shadow-[#2C146F]'
    : 'bg-[#eeeeee]'
  return (
    <div className={`sm:w-24 sm:h-24 w-[75px] h-[75px] ${valStyle} text-white font-bold text-xl sm:text-2xl flex justify-center items-center rounded ease-out duration-75`}>{val !== 0 && val}</div>
  )
}

export default Tile