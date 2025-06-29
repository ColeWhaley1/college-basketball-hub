"use client";

import { useState } from 'react';
import LoadingPage from '@/components/loading-page';

export default function Signup() {

    const [loading, setLoading] = useState<boolean>(false);

    const handleSignup = async () => {
        setLoading(true);

        
    }

    if (loading) {
        return (
            <LoadingPage/>
        )
    }
    return (
        <div className="flex w-full min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 w-full max-w-md rounded-md shadow-lg h-[66vh]">
                <h1 className="text-theme-orange font-bold text-lg">Sign Up</h1>
                <div className="mt-12 flex flex-col justify-center gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="ex. collegehoops@gmail.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="*********"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="*********"
                        />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button className="w-full bg-theme-orange text-white font-semibold py-2 rounded-md btn-orange transition-colors" onClick={handleSignup}>
                            Sign Up
                        </button>
                    </div>
                    <div className='flex items-center justify-center mt-4'>
                        <div className='text-sm text-gray-600 flex items-center justify-center gap-2'>
                            <p>Already have an account? </p>
                            <a href='/login' className='text-theme-orange'>Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
