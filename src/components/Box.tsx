import { NextPage } from "next";
import { ReactNode } from "react";

interface BoxProps {
    children: ReactNode;
    className?: string;
}

const Box: NextPage<BoxProps> = ({
    children,
    className
}) => {
    return (
        <>
            {
                children
            }
        </>
    )
}

export default Box;