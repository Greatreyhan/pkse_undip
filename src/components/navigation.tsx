'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const [navShow, setNavShow] = useState<boolean>(false)
    const path = usePathname()
    return (
        <header className="bg-white w-full z-50 fixed bg-opacity-30 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="flex items-center gap-4 text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <Image src={"/logo_KSE.png"} width={50} height={50} alt='logo' />
                    <Image src={"/Undip.png"} width={35} height={35} alt='undip' />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <div className="flex items-center gap-4">


                        <button onClick={e => setNavShow(!navShow)} className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <a className={`${path == '/' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#home"> Home </a>
                        </li>

                        <li>
                            <a className={`${path == '/departement' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#departement"> Departement </a>
                        </li>

                        <li>
                            <a className={`${path == '/information' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#information"> Information </a>
                        </li>

                        <li>
                            <a className={`${path == '/galleries' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#galleries"> Galleries </a>
                        </li>

                        <li>
                            <a className={`${path == '/contact-us' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#contact-us"> Contact Us </a>
                        </li>
                    </ul>
                </nav>

            </div>
            {/* Screen Nav */}
            {navShow ?
                <div className='w-screen h-screen bg-white bg-opacity-70 flex justify-center items-center'>
                    <nav aria-label="Global" className="block">
                        <ul className="flex flex-col items-center gap-6 text-sm">
                            <li>
                                <a onClick={e => setNavShow(!navShow)} className={`${path == '/' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#home"> Home </a>
                            </li>

                            <li>
                                <a onClick={e => setNavShow(!navShow)} className={`${path == '/departement' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#departement"> Departement </a>
                            </li>

                            <li>
                                <a onClick={e => setNavShow(!navShow)} className={`${path == '/information' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#information"> Information </a>
                            </li>

                            <li>
                                <a onClick={e => setNavShow(!navShow)} className={`${path == '/galleries' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#galleries"> Galleries </a>
                            </li>

                            <li>
                                <a onClick={e => setNavShow(!navShow)} className={`${path == '/contact-us' ? 'text-primary-content/50 font-semibold' : 'text-primary-content'} transition hover:font-semibold`} href="#contact-us"> Contact Us </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                : null}

        </header>
    )
}
