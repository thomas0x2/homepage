import path from "path"
import fs from "fs"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"

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
        <div className="container mx-auto px-4 py-8">
            <h1 className="font-header text-2xl font-bold">{frontmatter.title}</h1>
            <p className="text-gray-500">{frontmatter.date}</p>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}