"use client";
import Footer from "@/components/layout/public/Footer";
import { NavbarHeader } from "@/components/layout/public/NavbarHeader";
import OfferCard from "@/components/layout/public/OfferCard";
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}