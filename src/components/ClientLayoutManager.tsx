"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function ClientLayoutManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide the Navbar, Footer, and Chatbot on Portal, Admin, and Login pages
  const isDashboard = pathname?.startsWith("/portal") || pathname?.startsWith("/admin-portal") || pathname?.startsWith("/login");

  if (isDashboard) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
}
