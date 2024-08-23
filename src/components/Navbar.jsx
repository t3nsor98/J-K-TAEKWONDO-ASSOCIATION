"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../assets/css/colorAssets.css";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Affiliated",
        href: "/affiliated",
    },
    {
        name: "Members",
        href: "/members",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="circle-bg">
            <div className="relative w-full text-white bg-red-500/10">
                <div className="mx-auto flex container items-center justify-between px-4 py-6 sm:px-6">
                    <div className="hidden grow items-start lg:flex">
                        <ul className="inline-flex space-x-8">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="font-bold hover:underline underline-offset-8"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        {/* fonticon social icons */}

                        <Link
                            to={"/register"}
                            type="button"
                            className="rounded-md bg-white uppercase px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Register Now
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <Menu
                            onClick={toggleMenu}
                            className="h-6 w-6 cursor-pointer"
                        />
                    </div>
                    {isMenuOpen && (
                        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pb-6 pt-5">
                                    <div className="flex items-center justify-between">
                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                onClick={toggleMenu}
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <X
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-4">
                                            {menuItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                >
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                        {item.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                    <Link
                                        to={"/register"}
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
