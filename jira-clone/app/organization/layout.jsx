// app/organization/layout.jsx
import { Inter } from "next/font/google";
import SimpleNavbar from "@/components/simple-navbar";
import SimpleFooter from "@/components/simple-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Organization Dashboard",
  description: "Manage your organization's projects and issues",
};

export default function OrganizationLayout({ children }) {
  return (
    <>
      {/* No ClerkProvider here since it's already in the root layout */}
      <SimpleNavbar />
      <div className="flex-grow">
        {children}
      </div>
      <SimpleFooter />
    </>
  );
}