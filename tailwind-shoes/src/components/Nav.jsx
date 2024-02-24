import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react";

export function Nav() {

    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

    const ROUTES = [
        "Home",
        "About",
        "Services",
        "Pricing",
        "Contact"
    ]

    return (
        <nav className="flex flex-wrap items-center justify-between">
            {/* Logo */}
            <a href="#">
                <NikeLogo className="h-20 w-20" />
            </a>
            {/* Burgger button */}
            <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className="lg:hidden hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg">
                <RxHamburgerMenu size={25} />
            </button>
            {/* Menu list */}
            <div className={`
                ${!isMobileMenuShown && "hidden"}
                 w-full lg:w-auto lg:block`
            }>
                <ul className="lg:space-x-8 flex flex-col lg:flex-row border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent text-lg rounded-lg p-4">
                    {ROUTES.map((route, index) => {
                        return (
                            <li
                                className={`cursor-pointer rounded px-3 py-2 ${index === 0
                                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                                    : "hover:bg-gray-100"} `}
                                key={route}>{route}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* Cart Button */}
            <div className="fixed bottom-4 left-4 lg:static">
                <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
                    <button><TbShoppingBag /></button>
                </div>
            </div>
        </nav>
    )
}  