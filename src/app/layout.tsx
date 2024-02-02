import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className} w-full h-screen flex justify-center items-center place-content-center justify-items-center align-middle `}>
        <main className="w-[430px] h-[932px] relative bg-[#EEE8F0]   flex flex-col"> 
            <Nav />
             {children}
        </main>
      </body>
    </html>
  );
}
