import React from 'react'
import MenuIteam from './MenuIteam'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import { MdLocalMovies } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { FaPerson } from "react-icons/fa6";
import Link from 'next/link';


export default function Header() {
  return (
    <div className='flex justify-between p-3 max-w-6xl mx-auto'>
        <div className="flex gap-4">
          <MenuIteam  title="home" address="/" Icon={AiFillHome} />
          <MenuIteam  title="about" address="/bout" Icon={BsFillInfoCircleFill} />
          <MenuIteam  title="Movies page" address="/Movies page" Icon={MdLocalMovies} />
          <MenuIteam  title="Single Movie page" address="/Single Movie page" Icon={RiMovie2Fill} />
          <MenuIteam  title="Single actors page" address="/Single actors page" Icon={FaPerson} />
        </div>
        <Link href={'/'} className='flex gap-1 items-center' >
        <span className="text-white text-2xl font-bold  bg-zinc-900 py-1 px-2 rounded-lg  ">Straw</span>
        <span className='text-xl hiddien sm:inline'>Hats</span>
         
        </Link>
        
    </div>
  )
}
