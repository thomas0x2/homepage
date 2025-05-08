import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="flex justify-center items-center">
        <Link href="/">
          <img src="/logo_white.png" alt="logo" className="w-32 h-32" />
        </Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}
