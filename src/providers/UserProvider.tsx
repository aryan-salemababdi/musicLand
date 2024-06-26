"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { NextPage } from "next";
import { ReactNode } from "react";

interface UserProviderProps {
    children: ReactNode
}


const UserProvider: NextPage<UserProviderProps> = ({ children }) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
};

export default UserProvider;