import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Vulcan Racing | DSATM Formula Student Team",
  description:
    "Vulcan Racing is the official Formula Student team of Dayananda Sagar Academy of Technology and Management (DSATM), Bangalore. Engineering speed. Building legacies.",
  keywords: [
    "Vulcan Racing",
    "DSATM",
    "Formula Student",
    "Formula Bharat",
    "FSAE",
    "Motorsport",
    "Bangalore",
    "Racing Team",
    "Engineering",
  ],
  authors: [{ name: "Vulcan Racing Team" }],
  icons: { icon: "/vulcan-logo.png" },
  openGraph: {
    title: "Vulcan Racing | DSATM Formula Student Team",
    description:
      "Engineering Speed. Building Legacies. Official Formula Student team of DSATM, Bangalore.",
    type: "website",
    locale: "en_IN",
    siteName: "Vulcan Racing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vulcan Racing | DSATM Formula Student Team",
    description:
      "Engineering Speed. Building Legacies. Official Formula Student team of DSATM, Bangalore.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${orbitron.variable}`}>
      <body className="bg-vulcan-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
