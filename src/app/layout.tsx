import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Rourke Lowe',
  description: 'Product Manager based in Victoria, BC. I take ideas from zero to one.',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
