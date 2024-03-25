import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-sky-600  bg-amber-500 p-4 text-lg  justify-center gap-4'>
      <NavbarItem title="Trending" param="fetchTrending" />

      <NavbarItem title="Top Rated " param="fetchTopRated" />
      

    </div>
  )
}





