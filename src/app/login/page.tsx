"use client";

import { useState } from 'react';
import LoadingPage from '@/components/loading-page';
import { login } from '@/services/user';
import { useRouter } from 'next/navigation';

export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleLogin = async () => {

        try {
            await login(email, password);
        } catch (error: any) {
            alert(error.message);
        }
    }

    
    return (
        <div className="flex w-full min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 w-full max-w-md rounded-md shadow-lg h-[66vh]">
                <h1 className="text-theme-orange font-bold text-lg">Log In</h1>
                <div className="mt-18 flex flex-col justify-center gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="ex. collegehoops@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border p-2 rounded w-full"
                            placeholder="Enter password"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button className="w-full bg-theme-orange text-white font-semibold py-2 rounded-md btn-orange transition-colors" onClick={handleLogin}>
                            Log In
                        </button>
                    </div>
                    <div className='flex items-center justify-center mt-4'>
                        <div className='text-sm text-gray-600 flex items-center justify-center gap-2'>
                            <p>Don't have an account? </p>
                            <a href='/signup' className='text-theme-orange'>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
