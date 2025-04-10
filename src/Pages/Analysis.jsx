import React from 'react'
import UserProfileDetails from '../Components/UserProfileDetails'

export const Analysis = () => {
    return (
        <>
            <div className="w-screen h-screen mx-auto p-6 bg-[#121212] shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8 border border-[#1f1f1f]">
                <UserProfileDetails />
            </div >
        </>
    )
}
