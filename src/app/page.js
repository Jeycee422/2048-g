'use client'
import Board from '@/components/Board'
import ArrowKeys from '@/components/ArrowKeys'
import { useEffect, useState } from 'react'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const [score,setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const hundredT = score.toString().split('').slice(0,3).join('')
  const hundredTBest = bestScore.toString().split('').slice(0,3).join('')
  const [gameOver,setGameOver] = useState(false)
  const [tiles,setTiles] = useState([
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ])

  function initTile(board){
    const newState = [...board]
    const rand = randomChoice()
    const [x,y] = [Math.floor(Math.random() * 4),Math.floor(Math.random() * 4)]
    const updatedMatrix = newState.map((row, i) =>
      i === x ? row.map((value, j) => (j === y ? rand : value)) : row
    )

    setTiles(updatedMatrix)
  }

  const initBestScore = () => {
    let best = localStorage.getItem('best')
    if(best){
      setBestScore(best)
    }
  }

  function checkNeighbors(matrix, row, col) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const neighbors = {};
  
    // Check left neighbor
    if (col > 0) {
      neighbors.left = matrix[row][col - 1];
    }
  
    // Check right neighbor
    if (col < cols - 1) {
      neighbors.right = matrix[row][col + 1];
    }
  
    // Check top neighbor
    if (row > 0) {
      neighbors.top = matrix[row - 1][col];
    }
  
    // Check bottom neighbor
    if (row < rows - 1) {
      neighbors.bottom = matrix[row + 1][col];
    }
  
    return neighbors;
  }

  function randomChoice(array = [2,4], weights = [0.7, 0.3]) {
    let totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let randomValue = Math.random() * totalWeight;
    
    if (randomValue < weights[0]) {
        return array[0];
    } else {
        return array[1];
    }
  }

  function getRandomZeroIndices(matrix) {
    var zeroIndices = [];
    
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroIndices.push([i, j]);
            }
        }
    }
  
    return zeroIndices[Math.floor(Math.random() * zeroIndices.length)];
  }

  const newGame = () => {
    setScore(0)
    setGameOver(false)
    setTiles(prevState => {
      const tile = [...prevState]
      const newState = tile.map(row => row.map(() =>  0))
      const rand = randomChoice()
      const [x,y] = [Math.floor(Math.random() * 4),Math.floor(Math.random() * 4)]
      return newState.map((row, i) => i === x ? row.map((value, j) => (j === y ? rand : value)) : row)
    })
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    initTile(tiles)
    initBestScore()
  },[])

  useEffect(() => {
    const showGameOver = async() => {
      const noMove = tiles.every((tile,indx) => tile.every((cel,indy) => {
        const {top,bottom,left,right} = checkNeighbors(tiles,indx,indy)
        return cel> 0 && cel !== top && cel !== right && cel !== left && cel !== bottom
      }))
      if(noMove){
        await sleep(1500)
        if(score > bestScore){
          setBestScore(score)
          localStorage.setItem('best',score)
        }
        setGameOver(true)
      }
    }
    showGameOver()
  },[tiles])

  
  return (
    <main className="bg-zinc-50 flex min-h-screen min-w-screen flex-col items-center justify-center" style={mont.style}>
      <div className='w-80 sm:w-[400px] mb-2 text-xl sm:text-2xl items-end flex flex-row text-[#888] justify-between'>
        <div className='flex flex-col'>
          {bestScore > 0 && <div className='flex flex-row items-center sm:text-base text-sm'>
            <div className='mr-2 font-semibold self-center'>Best</div>
            <div className='text-xl sm:tex-2xl font-bold text-[#666]'>{bestScore>99999 ? hundredTBest+'k' : bestScore }</div>
          </div>}
          <div className='flex flex-row items-center'>
            <div className='mr-2 font-semibold self-end'>Score</div>
            <div className='text-3xl sm:text-4xl font-bold text-[#666]'>{score>99999 ? hundredT+'k' : score }</div>
          </div>
        </div>
        <div 
          className='cursor-pointer bg-[#5da4dc] rounded w-36 h-9 sm:w-40 sm:h-11 flex justify-center items-center font-semibold text-white text-lg sm:text-xl'
          onClick={newGame}
        >
          <div>
            New Game
          </div>
        </div>
      </div>
      <Board gameOver={gameOver} tiles={tiles}/>
      <ArrowKeys newGame={newGame} gameOver={gameOver} setTiles={setTiles} tiles={tiles} randomChoice={randomChoice} setScore={setScore} getRandomZeroIndices={getRandomZeroIndices} initTile={initTile} />
    </main>
  )
}
