"use client"
import ImageDisplayer from "./components/ImageDisplayer"
import { useState } from 'react'

export default function Home() {
  
  const [point, setPoint] = useState(0)

  const handleClick = () => {
    setPoint(point+10)
  }

  return (
    <main className="max-w-6xl mx-auto h-screen">
      <div className="flex flex-wrap flex-col gap-4 py-5 h-full">
        <div className="h-fit flex">
          <div className="absolute self-center">
            <h1 >Point: {point}</h1>
          </div>
          <h1 className="grow text-center text-4xl font-bold">Click the cats!</h1>
        </div>
          <ImageDisplayer onClick={handleClick} />
      </div>
    </main>
  )
}