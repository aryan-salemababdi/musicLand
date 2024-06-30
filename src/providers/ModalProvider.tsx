"use client";

import AuthModal from '@/components/Atom/AuthModal/AuthModal';
import Modal from '@/components/Atom/Modal/Modal';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true);
    }, [isMounted]);

    if (!isMounted) null;

    return <AuthModal />

}

export default ModalProvider;