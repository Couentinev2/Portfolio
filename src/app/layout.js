// src/app/layout.js
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <body className={`pt-[60px] ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>);
}
