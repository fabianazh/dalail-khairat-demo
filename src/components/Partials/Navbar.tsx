import { navItems } from '@/constants/component'
import NavLink from './NavLink'

export default function Navbar() {
    return (
        <>
            <nav className="w-fit hidden lg:flex z-0">
                <ul className="w-fit flex gap-2 lg:gap-4">
                    {navItems.map(
                        (
                            navItem: { link: string; text: string },
                            index: number
                        ) => (
                            <li key={index}>
                                <NavLink href={navItem.link}>
                                    {navItem.text}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </>
    )
}
