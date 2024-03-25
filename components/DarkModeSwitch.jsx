'use client'

import {MdLightMode,MdDarkMode} from 'react-icons/md'
import { useTheme }  from 'next-themes'
// import { useEffect } from 'react';
import React, { useState, useEffect } from 'react';


export default function DarkModeSwitch() {
  const {theme, setTheme , systemTheme} = useTheme ()
  const [mounted, setMounted] = useState (false); 
  const currentTheme = theme  === 'sysrtem' ? systemTheme : theme ;
  useEffect(() => setMounted(true),[])

  return (
    <div>
      {
        mounted && (currentTheme === 'dark' ?( <MdLightMode onClick={()=>setTheme ('light')} className='text-2xl cursor-pointer hover:text-amber-500 ' />) :( <MdDarkMode onClick={()=>setTheme ('dark')} className='text-2xl cursor-pointer  hover:text-amber-500 ' /> )
        ) } 
    </div>
  )
}

