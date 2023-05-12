import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineSearch className="text-2xl" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-[#ff4500] focus:border-[#ff4500] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff4500] dark:focus:border-[#ff4500]"
        placeholder="Search Reddit"      
      />
      
    </div>
  
  )
}

export default Search