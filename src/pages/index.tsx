import { JetBrains_Mono, Fira_Code } from "next/font/google";
import Link from "next/link";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrains-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${firaCode.className} ${jetBrainsMono.className} flex items-center justify-center h-[calc(100vh-<header height>)]
 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira-code)]`}
    >
      <div className="flex flex-col gap-4">
        <Link href="/manual">
          <h1 className="font-header text-2xl font-bold">/manual</h1>
        </Link>
        <Link href="/blog">
          <h1 className="font-header text-2xl font-bold">/blog</h1>
        </Link>
        <Link href="/projects">
          <h1 className="font-header text-2xl font-bold">/projects</h1>
        </Link>
        <Link href="/about">
          <h1 className="font-header text-2xl font-bold">/about</h1>
        </Link>
      </div>
    </div>
  );
}
