import { NextPage } from "next";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: ReactNode;
    className?: string;
}

const Box: NextPage<BoxProps> = ({
    children,
    className
}) => {
    return (
        <div className={twMerge(`
      bg-neutral-800
      rounded-lg
      h-fit
      w-full
    `, className)}>
            {
                children
            }
        </div>
    )
}

export default Box;