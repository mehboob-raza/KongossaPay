import Navbar from "@/components/common/Navbar/navbar";
import "./globals.css";

import localFont from "next/font/local";
import Footer from "@/components/common/footer";
import Support from "@/components/Home/Section/experienceCard";

export const ppTelegrafUltraLight = localFont({
  src: "./fonts/telegraf/PPTelegraf-Ultralight.woff2",
  weight: "200",
  style: "normal",
  variable: "--font-pptelegraf-ultralight",
});

export const ppTelegrafRegular = localFont({
  src: "./fonts/telegraf/PPTelegraf-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-pptelegraf-regular",
});

export const ppTelegrafMedium = localFont({
  src: "./fonts/telegraf/PPTelegraf-Regular.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-pptelegraf-regular",
});

export const ppTelegrafBold = localFont({
  src: "./fonts/telegraf/PPTelegraf-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-pptelegraf-bold",
});

export const ppTelegrafExtraBold = localFont({
  src: "./fonts/telegraf/PPTelegraf-Bold.woff2",
  weight: "800",
  style: "normal",
  variable: "--font-pptelegraf-extrabold",
});
export const metadata = {
  title: "KongossaPay | Move Money Across Borders",
  description: "From celebrations to emergencies, send and receive money globally with a multi-currency wallet — without delay and hidden fees.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "KongossaPay | Move Money Across Borders",
    description: "From celebrations to emergencies, send and receive money globally with a multi-currency wallet — without delay and hidden fees.",
    url: "https://kongossapay.com",
    siteName: "KongossaPay",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 60,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KongossaPay | Move Money Across Borders",
    description: "From celebrations to emergencies, send and receive money globally with a multi-currency wallet — without delay and hidden fees.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ppTelegrafUltraLight.variable} ${ppTelegrafRegular.variable} ${ppTelegrafBold.variable} ${ppTelegrafExtraBold.variable} font-sans`}
      >
        <Navbar />
        {children}
        <section className="w-full  py-4 lg:py-8 md:padding-l ">
        </section>
        <Footer />
      </body>
    </html>
  );
}
