import { type ReactNode } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
