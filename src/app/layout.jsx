import "./globals.css";

import CustomFooter from "@/components/CustomFooter";

import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TYS Consultant",
  description: "TYS Consulting, Business Consultant",
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </LanguageProvider>
  );
}
