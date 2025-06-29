"use client";

import { useState } from 'react';
import LoadingPage from '@/components/loading-page';
import { createUser } from '@/services/user';
import { toast } from 'react-toastify';

export default function Signup() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState<boolean>(false);


    const handleSignup = async () => {
        try {
            if(!email || !password || !confirmedPassword) {
                throw new Error("All fields are required.");
            }
            if (password !== confirmedPassword) {
                throw new Error("Passwords do not match.");
            }
            await createUser(email, password);
        } catch (error: any) {
            toast.error(error.message || "Signup failed. Please try again.");
        }
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmedPassword ? "text" : "password"}
                                value={confirmedPassword}
                                onChange={(e) => setConfirmedPassword(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Confirm password"
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirmedPassword((prev) => !prev)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
                            >
                                {showConfirmedPassword ? "Hide" : "Show"}
                            </button>
                        </div>
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
