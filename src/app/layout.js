// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my Next.js + Tailwind portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NAVBAR */}
        <header className="flex justify-between items-center bg-white px-6 py-4 shadow">
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
            <a
              href="https://www.youtube.com/@kimchicroissant"
              className="hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vlog
            </a>
            <a href="/contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="bg-gray-100 py-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Quentin Guillaume. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
