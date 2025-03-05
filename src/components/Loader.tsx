


import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loader = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='flex items-center px-8 py-3 rounded-lg'>
        <AiOutlineLoading3Quarters className='w-10 h-10 animate-spin text-black mr-6'/>
        <p className='text-gray-900 text-2xl'>Cargando...</p>
        </div>

    </div>
  )
}

export default Loader