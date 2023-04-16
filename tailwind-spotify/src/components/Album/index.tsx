import Image from 'next/image'
import React from 'react'

export default function Album(props: {index: number}) {
  return (
    <a href='#' className="p-2 flex flex-col rounded-md gap-2 bg-white/5 hover:bg-white/10">
        <Image className='w-full' width={120} height={120} src="https://www.radiorock.com.br/wp-content/uploads/2023/01/pink-floyd-dark-side-of-the-moon.jpg" alt="dark side of the moon" /> 
        <strong className='font-semibold '>Daily {props.index}</strong>
        <span className='text-sm text-zinc-400'>The best album in the world</span>
    </a>
  )
}
