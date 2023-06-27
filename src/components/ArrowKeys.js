import React from 'react'
import ArrowSvg from '../../public/arrow.svg'
import {up,moveUp,down,moveDown,left,moveLeft,right,moveRight} from '../utils/controller'


function ArrowKeys({setTiles,tiles,randomChoice,setScore,gameOver,getRandomZeroIndices}) {
    
    async function handleUp(){
        const prevState = JSON.parse(JSON.stringify(tiles))
        await setTiles((prevState) => moveUp([...prevState]))
        const {newBoard,score} = up(tiles)
        await setTiles(newBoard)
        await setScore(x => x+=score)
        await setTiles((prevState) => moveUp([...prevState]))
        const tilesMoved = tiles.some((row, rowIndex) => row.some((tile, colIndex) => tile !== prevState[rowIndex][colIndex]))
        if(tilesMoved){
            const newSpawn = spawnRandomTile(tiles)
            await setTiles(newSpawn)
        }
    }
    
    async function handleDown(){
        const prevState = JSON.parse(JSON.stringify(tiles))
        await setTiles((prevState) => moveDown([...prevState]))
        const {newBoard,score} = down(tiles)
        await setTiles(newBoard)
        await setScore(x => x += score)
        await setTiles((prevSate) => moveDown([...prevSate]))
        const tilesMoved = tiles.some((row, rowIndex) => row.some((tile, colIndex) => tile !== prevState[rowIndex][colIndex]))
        if(tilesMoved){
            const newSpawn = spawnRandomTile(tiles)
            await setTiles(newSpawn)
        }
    }
    
    async function handleRight(){
        const prevState = JSON.parse(JSON.stringify(tiles))
        await setTiles((prevState) => moveRight([...prevState]))
        const {newBoard,score} = right(tiles)
        await setTiles(newBoard)
        await setScore(x => x += score)
        await setTiles((prevSate) => moveRight([...prevSate]))
        const tilesMoved = tiles.some((row, rowIndex) => row.some((tile, colIndex) => tile !== prevState[rowIndex][colIndex]))

        if(tilesMoved){
            const newSpawn = spawnRandomTile(tiles)
            await setTiles(newSpawn)
        }
    }
    
    async function handleLeft(){
        const prevState = JSON.parse(JSON.stringify(tiles))
        await setTiles((prevState) => moveLeft([...prevState]))
        const {newBoard,score} = left(tiles)
        await setTiles(newBoard)
        await setScore(x => x += score)
        await setTiles((prevSate) => moveLeft([...prevSate]))
        const tilesMoved = tiles.some((row, rowIndex) => row.some((tile, colIndex) => tile !== prevState[rowIndex][colIndex]))
        if(tilesMoved){
            const newSpawn = spawnRandomTile(tiles)
            await setTiles(newSpawn)
        }
    }
    
    function spawnRandomTile(board){
        const newBoard = [...board]
        const [x,y] = getRandomZeroIndices(newBoard)
        newBoard[x][y] = randomChoice()
        return newBoard
    }

  return (
    <div className='grid grid-cols-3 gap-2'>
        <div></div>
        <div
            className='h-[75px] w-[75px] sm:w-24 sm:h-24 cursor-pointer rounded-xl border-4 border-[#4ade80] text-[#4ade80] text-4xl font-bold flex justify-center items-center p-2 bg-[#bbf7d0]'
            onClick={gameOver ? null :handleUp}
        >
            <ArrowSvg className='w-10 h-10 sm:w-12 sm:h-12 rotate-90' />
            {/* W */}
        </div>
        <div></div>
        <div
            className='h-[75px] w-[75px] sm:w-24 sm:h-24 cursor-pointer rounded-xl border-4 border-[#4ade80] text-[#4ade80] text-4xl font-bold flex justify-center items-center p-2 bg-[#bbf7d0]'
            onClick={gameOver?null:handleLeft}
        >
            <ArrowSvg className='w-10 h-10 sm:w-12 sm:h-12' />
            {/* A */}
        </div>
        <div
            className='h-[75px] w-[75px] sm:w-24 sm:h-24 cursor-pointer rounded-xl border-4 border-[#4ade80] text-[#4ade80] text-4xl font-bold flex justify-center items-center p-2 bg-[#bbf7d0]'
            onClick={gameOver?null:handleDown}
        >
            <ArrowSvg className='w-10 h-10 sm:w-12 sm:h-12 -rotate-90' />
            {/* S */}
        </div>
        <div
            className='h-[75px] w-[75px] sm:w-24 sm:h-24 cursor-pointer rounded-xl border-4 border-[#4ade80] text-[#4ade80] text-4xl font-bold flex justify-center items-center p-2 bg-[#bbf7d0]'
            onClick={gameOver?null:handleRight}
        >
            <ArrowSvg className='w-10 h-10 sm:w-12 sm:h-12 rotate-180' />
            {/* D */}
        </div>
    </div>
  )
}

export default ArrowKeys