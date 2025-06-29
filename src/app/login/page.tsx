"use client";

import Lottie from 'lottie-react';
import loadingAnimation from '@/assets/animations/basketball_loading.json';
import { useState } from 'react';

export default function Login() {

    const [loading, setLoading] = useState<boolean>(true);

    if (loading) {
        return (
            <div className='flex w-full h-full items-center justify-center'>
                <Lottie animationData={loadingAnimation} style={{width: 100, height: 100}}></Lottie>
            </div>
        )
    }
    return (
        <div className="flex w-full min-h-screen items-center justify-center bg-gray-200">
            <div className="bg-white p-8 w-full max-w-md rounded-md shadow-lg h-[66vh]">
                <h1 className="text-theme-orange font-bold text-lg">Log In</h1>
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
                    <div className="flex items-center justify-center mt-4">
                        <button className="w-full bg-theme-orange text-white font-semibold py-2 rounded-md btn-login-orange transition-colors">
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
