import Link from "next/link"
import Image from "next/image"

export async function getStaticProps() {
    const content = {
        title: "About"
    }

    return {
        props: {
            content,
        },
    }
}

export default function About() {
    return (
        <>
            <div className="container mx-auto px-4 py-8 sm:px-20">
                <div className="text-center font-header">
                    <h1>/about</h1>
                </div>

                <div className="flex items-start justify-center gap-8 px-4 py-8 sm:px-[20%]">
                    <Image
                        src="/aboutme.png"
                        alt="me"
                        width={300}
                        height={400}
                        className="rounded"
                    />
                    <p>
                        Hi, I&apos;m Thomas — a curious system-thinker based in Zurich, raised between South Germany and Switzerland.
                        <br /><br />
                        I am fascinated by Mathematics, Computer Science, Physics, Economics, Philosophy, Psychology and Systems thinking.
                        <br /><br />
                        Some of the thinkers that have shaped my worldview include Buckminster Fuller, Steve Jobs, Stewart Brand, Viktor Frankl, David Deutsch, Carl Jung, Douglas Hofstadter and many more.
                        <br /><br />
                        I created this space to share my thoughts, ideas and projects so they can escape my mind and be free. Please <Link className="underline" href="mailto:thomas@bollenbach.ch">reach out to me</Link> if you&apos;d like to give me feedback on my content!

                        <br />
                        <br />

                        <Link className="text-gray-500" href="https://github.com/thomas0x2">GitHub</Link>
                        <br />
                        <br />
                        <Link className="text-gray-500" href="https://www.linkedin.com/in/thomas-bollenbach-458a40182/">LinkedIn</Link>
                        <br />
                        <br />
                        <Link className="text-gray-500" href="https://x.com/thomas7ard">X/Twitter</Link>
                    </p>
                </div>
            </div>

        </>
    )
}