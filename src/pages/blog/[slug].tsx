import path from "path"
import fs from "fs"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import Link from "next/link"

export type Frontmatter = {
    title: string
    date: string
}

export async function getStaticPaths() {
    const files = fs.readdirSync("src/posts")
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", ""),
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const filePath = path.join("src/posts", `${params.slug}.md`)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    return {
        props: {
            frontmatter: data,
            content,
        }
    }
}

export default function BlogPost({ frontmatter, content }: { frontmatter: Frontmatter, content: string }) {
    return (
        <>
            <div className="container mx-auto px-4 py-8 sm:px-20">
                <div className="flex items-center justify-center"><Link href="/blog" className="font-header text-2xl font-bold pb-2">/blog</Link></div>
                <h1 className="font-header text-2xl font-bold">{frontmatter.title}</h1>
                <p className="text-gray-500">{frontmatter.date}</p>
                <div>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            table: (props) => (
                                <div className="overflow-x-auto w-full">
                                    <table className="min-w-max" {...props} />
                                </div>
                            ),
                        }}
                    >{content}</ReactMarkdown>
                </div>
            </div >
        </>
    )
}