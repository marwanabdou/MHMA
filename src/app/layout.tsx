import type { Metadata } from 'next';
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from "next/font/google";
import Head from "next/head";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: 'MHMA Web Design Company',
  description: 'Transforming your digital presence with innovative web design solutions. We craft stunning and user-friendly websites that captivate your audience and drive results. Contact us to elevate your online brand today.',
  };
  




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
