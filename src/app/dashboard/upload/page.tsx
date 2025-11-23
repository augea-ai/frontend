"use client";

// Redirect users to the new Walrus upload page at /upload

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { UploadContent } from "./content";
import { LogIn, Shield } from "lucide-react";

export default function UploadPage() {
  const { ready, authenticated, login } = usePrivy();
  const router = useRouter();

  // Redirect to Walrus upload page
  useEffect(() => {
    router.push("/upload");
  }, [router]);

  // Show redirect message
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-brand-green-light border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">Redirecting to Walrus Upload...</p>
      </div>
    </div>
  );
}
