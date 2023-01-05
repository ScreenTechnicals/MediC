import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
    const navLinks = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Departments',
            href: '/departments',
        },
        {
            name: 'FAQs',
            href: '/faqs',
        },
        {
            name: 'Contact',
            href: '/contact',
        },
    ]
  return (
    <div className='flex w-screen items-center justify-between px-10 py-5 sticky top-0 left-0'>
        <Link href={"/"}>
            <button>
                <Image src={"/images/logo.png"} width={120} height={120} />
            </button>
        </Link>
        <div className='space-x-4'>
            {
                navLinks.map((link) => (
                    <Link href={link.href} key={link.name}>
                        <button>{link.name}</button>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar