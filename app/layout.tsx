import type { Metadata } from "next";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbershop Scheduler",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-full w-full flex-col overflow-y-hidden">
          <Header />

          <div className="h flex w-full flex-1 flex-col overflow-y-auto">
            <div className="flex w-full flex-1">{children}</div>

            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
