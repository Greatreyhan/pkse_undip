import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="footer footer-center p-6 bg-base-200 text-base-content rounded" id="contact-us">
            <nav className="grid grid-flow-col md:gap-4">
                <a className='md:p-2 mx-1 md:text-md text-xs hover:font-semibold md:border-none border-r border-neutral pr-3' href="#home">Home</a>
                <a className='md:p-2 mx-1 md:text-md text-xs hover:font-semibold md:border-none border-r border-neutral pr-3' href="#departemen">Departemen</a>
                <a className='md:p-2 mx-1 md:text-md text-xs hover:font-semibold md:border-none border-r border-neutral pr-3' href="#gallery">Gallery</a>
                <a className='md:p-2 mx-1 md:text-md text-xs hover:font-semibold md:border-none border-r border-neutral pr-3' href="#info">Information</a>
                <a className='md:p-2 mx-1 md:text-md text-xs hover:font-semibold' href="#contact-us">Contact Us</a>
            </nav>
            <nav>
                <div className="flex flex-wrap justify-around md:gap-10 gap-3">
                    <a target='_blank' className='flex flex-col items-center' href="https://www.instagram.com/kseundipofficial/"><FaInstagram className="fill-current w-8 h-8" /><span className='text-xs mt-1'>@kseundipofficial</span></a>
                    <a target='_blank' className='flex flex-col items-center' href="https://www.youtube.com/@paguyubankseundip3451"><FaYoutube className="fill-current w-8 h-8" /><span className='text-xs mt-1'>@paguyubankseundip3451</span></a>
                    <a target='_blank' className='flex flex-col items-center' href="https://www.tiktok.com/@kseundipofficial"><FaTiktok className="fill-current w-8 h-8" /><span className='text-xs mt-1'>@kseundipofficial</span></a>
                    <a target='_blank' className='flex flex-col items-center' href="mailto:undipkse@gmail.com"><IoMdMail className="fill-current w-8 h-8" /><span className='text-xs mt-1'>undipkse@gmail.com</span></a>
                </div>
            </nav>
            <aside>
                <p>Made with ❤ By Media & Relation Departement </p>
            </aside>
        </footer>
    )
}
