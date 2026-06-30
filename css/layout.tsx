import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravindra Pawar - Software Engineer & UI/UX Designer",
  description: "Senior React JS Team Lead with 10+ years of experience building scalable web applications, ad-tech platforms, dashboards, data visualization tools, and enterprise UI solutions.",
  keywords: [
    "Ravindra Pawar",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "WebHR Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Ravindra Pawar" }],
  creator: "Ravindra Pawar",
  publisher: "Ravindra Pawar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibiimemon.com",
    title: "Ravindra Pawar | React JS Team Lead | Frontend Developer",
    description: "Portfolio of Ravindra Pawar, UI Team Lead specializing in ReactJS, JavaScript, TypeScript, dashboards, data visualization, enterprise applications, and modern frontend architecture.",
    siteName: "Ravindra Pawar - Senior React Developer | UI Team Lead | 10+ Years",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravindra Pawar | React JS Team Lead | Frontend Developer",
    description: "A self-taught UI/UX designer and Software Engineer at WebHR.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ibiimemon.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
