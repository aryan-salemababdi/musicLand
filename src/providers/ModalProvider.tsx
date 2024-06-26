"use client";

import Modal from '@/components/Atom/Modal/Modal';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true);
    }, [isMounted]);

    if (!isMounted) null;

    return (
        <>
            <Modal />
        </>
    )
}

export default ModalProvider;