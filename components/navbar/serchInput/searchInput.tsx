import React, {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

type Props = {}

const SearchInput = (props: Props) => {
    const [searchText, setSearchText] = useState("")
  
   
  return (
    <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <AiOutlineSearch className="text-2xl text-gray-600" />
    </div>
    <input
      type="search"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}     
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-blue-500  focus:ring-0  block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Reddit Search"
    />
  </div>
  )
}

export default SearchInput