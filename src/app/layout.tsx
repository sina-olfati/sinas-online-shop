import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeDataProvider from "@/src/context/theme-data-provider";

// Next-intl
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Menu from "../components/menu/menu";
import { Footer } from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dynamically generate metadata based on the locale
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: locale === "jp" ? "シナのショップ" : "Sina's Shop",
    description:
      locale === "jp"
        ? "異なる体験！" // Japanese translation for "A different experience!"
        : "A different experience!",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="selection:bg-primary bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeDataProvider>
              <Menu />
              {children}
              <Footer />
            </ThemeDataProvider>
          </NextThemesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}






// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import ThemeDataProvider from "@/src/context/theme-data-provider";

// // Next-intl
// import {NextIntlClientProvider} from 'next-intl';
// import {getLocale, getMessages} from 'next-intl/server';
// import Menu from "../components/menu/menu";
// import { Footer } from "../components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Sina's Shop",
//   description: "A different experience!",
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//   const locale = await getLocale();
//   const messages = await getMessages();

//   return (
//     <html lang={locale} suppressHydrationWarning className="selection:bg-primary bg-background">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <NextIntlClientProvider messages={messages}>
//           <NextThemesProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <ThemeDataProvider>

//               <Menu />
//               {children}
//               <Footer />
              
//             </ThemeDataProvider>
//           </NextThemesProvider>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
