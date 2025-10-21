"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on hash change (like #services)
  useEffect(() => {
    const handleHashChange = () => setIsOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return (
    <nav className="navbar">
      <Link href="/" className="nav-left">Pastel Pixels Studio</Link>

      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-center ${isOpen ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/shop">Shop Template</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}