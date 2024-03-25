import React from 'react'
import MenuIteam from './MenuIteam'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import { MdLocalMovies } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { FaPerson } from "react-icons/fa6";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';


export default function Header() {
  return (
    <div className='flex justify-between p-3 max-w-6xl mx-auto'>
        <div className="flex gap-4">
          <MenuIteam  title="home" address="/" Icon={AiFillHome}   />
          
          <MenuIteam  title="Movies page" address="/Moviespage" Icon={MdLocalMovies} />
          <MenuIteam  title="Single Movie page" address="/SingleMoviepage" Icon={RiMovie2Fill} />
          <MenuIteam  title="Single actors page" address="/Singleactorspage" Icon={FaPerson} />

          <MenuIteam  title="about" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <div className='flex items-center gap-4 '>
          <DarkModeSwitch /> 
            <Link href={'/'} className='flex gap-1 items-center' >
            <span className="text-white text-2xl font-bold  bg-sky-600 py-1 px-2 rounded-lg  ">Straw</span>
            <span className='text-xl hiddien sm:inline'>Hats</span>
            
            </Link>

        </div>
        
    </div>
  )
}
