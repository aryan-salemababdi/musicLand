"use client";
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import { ReactNode, useMemo } from 'react';

// icon
import { HiHome } from "react-icons/hi"
import { BiSearch } from 'react-icons/bi';
import Box from './Box';

interface SidebarProps {
    children: ReactNode
}

const Sidebar: NextPage<SidebarProps> = ({
    children
}) => {

    const pathname = usePathname();

    const routes = useMemo(() => [{
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/"
    },
    {
        icon: BiSearch,
        label: "Search",
        active: pathname !== "/search",
        href: "/"
    }
    ], [pathname]);

    return (
        <>
            <div className="flex h-full">
                <div
                    className="
                    none
                    md: flex
                    flex-col
                    gap-y-2
                    bg-black
                    h-full
                    w-[300px]
                    p-2
                    "
                >
                    <Box>
                    
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Sidebar;