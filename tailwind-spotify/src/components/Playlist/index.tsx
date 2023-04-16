import { Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Playlist() {
  return (
     <a href="#" className="bg-white/5 group rounded-md overflow-hidden hover:bg-white/10 transition-colors flex items-center gap-4"> 
        <Image width={120} height={120} src="https://www.radiorock.com.br/wp-content/uploads/2023/01/pink-floyd-dark-side-of-the-moon.jpg" alt="dark side of the moon" /> 
        <strong>Dark side of the moon</strong>
        <button className='w-12 h-12 visible group-hover:opacity-100 opacity-0 duration-500 rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center justify-center pl-1'>
            <Play />
        </button>
    </a>
  )
}
