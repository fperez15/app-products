import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="flex items-center px-8 py-3 rounded-lg">
            <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin text-black mr-6" />
            <p className="text-gray-900 text-2xl">Cargando...</p>
          </div>
    </div>
  )
}

export default Loader