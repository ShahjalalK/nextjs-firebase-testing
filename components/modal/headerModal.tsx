import React from 'react'

type Props = {
    title : string;
    para? : string
}

const HeaderModal = ({title, para}: Props) => {
  return (
    <>
       <h3 className="text-xl font-medium mb-1">{title}</h3>
        {para ? (<p className="text-sm text-gray-700">{para}</p>) : 
        (<p className="text-sm text-gray-700">By continuing, you are setting up a Reddit account and agree to our User <span className="text-blue-500 cursor-pointer">Agreement</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.</p>) } 
    </>
  )
}

export default HeaderModal