"use client";
import OfferCard from "@/components/layout/public/OfferCard";
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
          <OfferCard/>
        </div>
        
      </body>
    </html>
  );
}