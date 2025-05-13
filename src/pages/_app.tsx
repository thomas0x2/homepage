import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-header',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-body',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="flex justify-center items-center pb-5">
        <Link href="/">
          <Image src="/logo_white.png" alt="logo" width={128} height={128} priority={true} />
        </Link>
      </header>
      <div className={`${firaCode.variable} ${firaCode.className} ${jetBrainsMono.variable} ${jetBrainsMono.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
