'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    let isActive
    const pathname = usePathname()

    if (href === '/') {
        isActive = pathname === href
    } else {
        isActive = pathname.startsWith(href)
    }

    return (
        <Link
            className={`group text-[0.8em] cursor-pointer relative text-black font-medium`}
            href={href}
        >
            {children}
            <div
                className={`absolute w-full h-[2px] bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left ${
                    isActive == true ? 'scale-x-100' : 'scale-x-0'
                }`}
            />
        </Link>
    )
}
