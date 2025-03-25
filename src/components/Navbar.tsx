import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="https://img.icons8.com/cotton/64/instagram-new.png" alt="iextract logo " height={100} width={100} className="h-10 w-10" />
                        <span
                            className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 font-sans">IExtract</span>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
                        <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
                    </div>
                </div>
            </div>
        </nav>
  )
}
