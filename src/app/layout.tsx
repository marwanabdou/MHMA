import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MHMA Web Design Company",
  description: "",
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
