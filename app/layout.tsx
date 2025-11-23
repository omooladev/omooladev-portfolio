import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Omosuyi Olawole : Software Engineer",
  description: "This is the portfolio of Omosuyi Olawole",
  openGraph: {
    type: "website",
    url: "https://omooladev-portfolio.onrender.com/",
    title: "Omosuyi Olawole is an engineer",
    description: "This is the portfolio of omosuyi olawole",
    images: ["/images/omooladev.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omosuyi Olawole is an engineer",
    description: "This is the portfolio of omosuyi olawole",
    images: ["/images/omooladev.png"],
  },
  icons: {
    icon: "/images/omooladev-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/8a380186d4.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
