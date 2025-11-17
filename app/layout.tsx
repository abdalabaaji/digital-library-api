import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Library API",
  description: "RESTful API for Digital Library Management System - CMPS312 Assignment 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
