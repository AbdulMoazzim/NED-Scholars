import "./globals.css";;
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NED Scholars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`font-["Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif] antialiased`}
      >
        <Header />
        <main className="pt-[100px] w-full">
          {children}

        </main>
        <Footer />
      </body>
    </html>
  );
}
