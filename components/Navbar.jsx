'use client';

import Link from 'next/link';
import siteConfig from '@/data/site.config.json';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          {siteConfig.site.name}
          <small>Security. Automation. AI.</small>
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>

        <div id="main-menu" className={`menu ${isOpen ? 'menu-open' : ''}`}>
          {siteConfig.navigation.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
