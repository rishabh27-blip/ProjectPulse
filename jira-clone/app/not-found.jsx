import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-900 text-white">
      <h1 className="text-7xl font-extrabold text-purple-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-6 max-w-md" aria-live="polite">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" passHref>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-md">
          Return Home
        </Button>
      </Link>
    </section>
  );
}
