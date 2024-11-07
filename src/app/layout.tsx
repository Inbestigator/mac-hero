import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "MacBook Air Hero",
  description: "Trying to recreate the MacBook Air hero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
