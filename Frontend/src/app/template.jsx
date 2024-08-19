'use client';
import Navbar from '@/components/Navbar';
import { UserProvider } from '@/Context/userContext';
import React from 'react'

const Template = ({ children }) => {
    return (
        <UserProvider>
            <Navbar />
            {children}
        </UserProvider>
    )
}

export default Template;