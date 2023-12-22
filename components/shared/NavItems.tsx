'use client'

import React from 'react'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavItems = () => {

    const pathname = usePathname();

    return (
        <ul className='flex-between flex-col w-full md:flex-row gap-5'>
            {
                headerLinks.map((link) => {

                    const isActiveItem = pathname === link.route 

                    return (
                        <li key={link.label} className={`${isActiveItem && "text-primary-500"} whitespace-nowrap p-medium-16`}>
                            <Link href={link.route}>{link.label}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavItems