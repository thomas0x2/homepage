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
      className={`${firaCode.className} ${jetBrainsMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira-code)]`}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Start here</h1>
        <Link href="/manual" className="text-center">The Sandbox Manual</Link>
      </div>
    </div>
  );
}
