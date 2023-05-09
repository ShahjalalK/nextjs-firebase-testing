import { Label, TextInput } from 'flowbite-react'
import {AiOutlineSearch} from 'react-icons/ai'
import React from 'react'

type Props = {}

const SearchInput = (props: Props) => {
  return (
    <div className="relative hidden md:flex flex-grow">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <AiOutlineSearch className=" text-xl" />
  </div>
  <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Redit" />
</div>
  )
}

export default SearchInput