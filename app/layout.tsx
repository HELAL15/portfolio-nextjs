import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ui/ScrollTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "HELAL's Portfolio",
  description: 'Modern & Minimal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.webp" sizes="any" />
      </head>
      <body className={inter.className}>
        <header>
          <FloatingNav />
        </header>
        <main>
          <ScrollTop />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
