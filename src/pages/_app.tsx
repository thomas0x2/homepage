import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-header',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center items-center">
        <Link href="/">
          <Image src="/logo_white.png" alt="logo" width={128} height={128} priority={true} />
        </Link>
      </header>
      <div className={`flex-grow ${inter.variable} ${inter.className} ${jetBrainsMono.variable} ${jetBrainsMono.className}`}>
        <Component {...pageProps} />
      </div>
      <footer className="flex justify-center text-sm text-gray-500 py-5">
        Want to reach out? &nbsp; <a href="mailto:thomas@bollenbach.ch">thomas@bollenbach.ch</a>
      </footer>
    </div>
  );
}
