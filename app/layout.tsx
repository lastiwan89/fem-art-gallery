import type { Metadata } from "next";
import { Big_Shoulders_Display } from "next/font/google";
import "./globals.css";

const shoulder = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Art Gallery Websites",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={shoulder.className}>{children}</body>
    </html>
  );
}
