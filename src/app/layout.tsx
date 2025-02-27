import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import SideBar from "@/components/navigation/SideBar";
import StoreProvider from "./StoreProvider";
import "@mantine/core/styles.css";

import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Squareme dashboard",
  description: "Financial dashboard to show customer statistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme={"light"} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="w-full h-full max-w-[1440px] mx-auto flex-col">
          <NavBar />
          <div className="w-full flex h-full pt-20">
            <SideBar />
            <div className="w-full md:pl-[263px] ">
              <StoreProvider>
                <MantineProvider theme={theme}>{children}</MantineProvider>
              </StoreProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

