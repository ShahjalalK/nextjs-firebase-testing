import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center flex-col space-y-2">
            <p className="text-lg">Sorry, that community does not exists or has been banned</p>
            <Link href="/" className="inline-block px-7 py-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-2 focus:border-blue-300 focus:ring-blue-500 uppercase">Go Home</Link>
        </div>
    </div>
  )
}

export default NotFound