import { Heart, Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Image className='w-16 h-12' width={80} height={80} src="https://www.radiorock.com.br/wp-content/uploads/2023/01/pink-floyd-dark-side-of-the-moon.jpg" alt="dark side of the moon" /> 
        <div className='flex flex-col gap-1'>
          <a href="" className='hover:border-b border-white/60'>Speak to me</a>
          <a href="" className='text-xs text-zinc-400 hover:border-b border-white/60'><span>Pink Floyd</span></a>
        </div>
        <button className='hover:text-green-500'>
          <Heart />
        </button>
      </div>
      <div className='flex flex-col items-center justify-center ml-12 space-y-2'>
        <div className='flex items-center gap-6'>
          <Shuffle size={20} className='text-zinc-200'></Shuffle>
          <SkipBack size={20} className='text-zinc-200'/>
          <button className='w-10 h-10 rounded-full bg-white text-black flex items-center justify-center pl-1'>
            <Play />
          </button>
          <SkipForward size={20} className='text-zinc-200' />
          <Repeat size={20} className='text-zinc-200' />
        </div>
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full group w-96 bg-zinc-600 flex items-center">
            <div className="bg-zinc-200 group-hover:bg-green-500 w-40 h-1">
            </div>
            <div className="rounded-full bg-white w-4 h-4 group-hover:opacity-100 opacity-0 duration-900"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1"></div>
            </div>
          </div>
          <Maximize2 size={20} />
       </div>
    </div>
  )
}
