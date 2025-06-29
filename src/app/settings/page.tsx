"use client";

import LoadingPage from "@/components/loading-page";
import { signOut } from "@/services/user";
import { useState } from "react";

export default function Settings() {

  const onSignOut = async () => {
    await signOut()
  }
  
  return (
    <div>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
}