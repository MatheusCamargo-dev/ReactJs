import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Playlist from '../Playlist'
import Album from '../Album'

export default function Main() {
  return (
    <div className='flex-1 bg-zinc-900 p-6'>
      <div className="flex items-center gap-3">
        <button className='rounded-full bg-black/40 p-1'>
            <ChevronLeft />
        </button>
        <button className='rounded-full bg-black/40 p-1'>
            <ChevronRight />
        </button>
      </div>
      <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {
           [...Array(6)].map((_, index) => {
                return <Playlist key={index} />
           })
        }
      </div>
      <h2 className='font-semibold text-2xl mt-10'>Made for Matheus Camargo Dev</h2>
      <div className="grid grid-cols-5 gap-5 mt-4">
        {
            [...Array(5)].map((_, index) => {
             return <Album key={index} index={index}/>
            })
        }

      </div>
    </div>
  )
}
