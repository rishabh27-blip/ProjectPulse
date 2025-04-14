// app/layout.js
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";
import "react-day-picker/dist/style.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const clerkAppearance = {
  baseTheme: shadesOfPurple,
  variables: {
    colorPrimary: "#3b82f6",
    colorBackground: "#1a202c",
    colorInputBackground: "#2D3748",
    colorInputText: "#F3F4F6",
  },
  elements: {
    formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
    card: "bg-gray-800",
    headerTitle: "text-blue-400",
    headerSubtitle: "text-gray-400",
  },
};

export const metadata = {
  title: "Project Pulse",
  description: "Project Management Tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en" className="h-full">
        <body className={`${inter.className} animated-dotted-background h-full`}>
          <ThemeProvider defaultTheme="dark">
            <Header />
            <main className="min-h-screen flex flex-col">{children}</main>
            <Toaster richColors />
            <footer className="bg-gray-900 py-8 mt-auto">
              <div className="container mx-auto px-4 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} ProjectPulse. All rights reserved.</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}