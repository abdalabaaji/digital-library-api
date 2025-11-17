import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Digital Library Management System",
  description: "Complete Digital Library Management System with API - CMPS312 Assignment 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
