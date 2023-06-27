import React from 'react'
import Tile from '../components/Tile'

function Board({tiles,gameOver}) {
  return (
    <>
      <div className='relative bg-white grid grid-rows-4 gap-2 p-2 rounded sm:shadow-md mb-3'>
          {gameOver && <div className='absolute w-full h-full bg-white/70 font-extrabold sm:text-4xl text-2xl text-[#666] flex justify-center items-center delay-1000 ease-out duration-1000'> <div className='animate-ping'>Game Over!</div></div>}
          {tiles.map((row,indx) => {
              return <div key={indx} className='grid grid-cols-4 gap-2'>
                  {row.map((col,indy) => {
                      return <Tile key={`${indx} ${indy}`} val={col}/>
                  })}
              </div>
          })}
      </div> 
    </>
  )
}

export default Board