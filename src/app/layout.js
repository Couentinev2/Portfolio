// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react"



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quentin Guillaume',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NAVBAR */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div>
            <Image
              src="/images/couentine.png" 
              alt="My Logo"
              width={50}   
              height={50} 
            />
          </div>
          <nav className="space-x-4 text-black">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/projects" className="hover:text-blue-600">Projects</a>
            <a href="/about" className="hover:text-blue-600">About</a>
        {/*    <a href="/contact" className="hover:text-blue-600">Contact</a>*/}

          </nav>
        </header>

        {/* MAIN CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="py-8 text-center bg-gray-100">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Quentin Guillaume. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
