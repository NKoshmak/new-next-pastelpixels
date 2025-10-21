/** @format */

import "./globals.css";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Pastel Pixels Studio",
  description: "Digital templates and design systems for soulful storytellers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="M2N-uySAIa6yzis8yURMCv_q5WNUx3BlqF-W8grNeSY"
        />
        <link rel="icon" href="/images/favicon.ico" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P7LH0WG3YY"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-P7LH0WG3YY');
    `,
          }}
        />
      </head>
      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
