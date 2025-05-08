import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="flex justify-center items-center">
        <Link href="/">
          <Image src="/logo_white.png" alt="logo" className="w-32 h-32" />
        </Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}
