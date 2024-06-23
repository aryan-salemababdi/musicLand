"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { HiHome, HiSearch } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button/Button";

interface HeaderProps {
    children: ReactNode,
    className?: string;

}

const Header: NextPage<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();

    const handleLogout = (): void => {

    }
    return (
        <div className={twMerge(`
            h-fit
            bg-gradient-to-b
            from-red-900
            p-6
            `)}>
            <div className="
                w-full
                mb-4
                items-center
                justify-between
                ">
                <div className="
                    hidden
                    md:flex
                    gap-x-2
                    items-center
                    ">
                    <button className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    "
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft
                            size={35}
                            className="text-white"
                        />
                    </button>
                    <button className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    "
                        onClick={() => router.forward()}
                    >
                        <RxCaretRight
                            size={35}
                            className="text-white"
                        />
                    </button>
                </div>
                <div className="flex justify-between md:hidden gap-x-2 items-center">
                    <div>
                        <button
                            className="
                    rounded-full
                    p-2
                    flex-items-center
                    bg-white
                    justify-center
                    hover:opacity-75
                    transition
                    mr-2
                    "
                        >
                            <HiHome className="text-black" size={25} />
                        </button>
                        <button
                            className="
                    rounded-full
                    p-2
                    flex-items-center
                    bg-white
                    justify-center
                    hover:opacity-75
                    transition
                    "
                        >
                            <HiSearch className="text-black" size={25} />
                        </button>
                    </div>
                    <div>
                        <div className="
                flex
                justify-between
                items-center
                gap-x-4
                ">
                            <>
                                <div>
                                    <Button
                                    onClick={()=> {}}
                                        className="
                            bg-transparent
                            text-neutral-300
                            font-medium
                            "
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                     onClick={()=> {}}
                                        className="
                            bg-white
                            px-4
                            py-2
                            "
                                    >
                                        Log in
                                    </Button>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header