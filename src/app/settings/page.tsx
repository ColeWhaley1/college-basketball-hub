"use client";

import { signOut } from "@/services/user";

export default function Settings() {

  const onSignOut = async () => {
    await signOut()
  }

  return (
    <div className="w-full h-full">
      <div className="p-8">
        <button onClick={onSignOut} className="bg-gray-200 rounded-md shadow-md p-2 px-4">Sign Out</button>
      </div>
    </div>
  );
}