import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export type BlogPostProps = {
    slug: string
    title: string
    date: string
}

export async function getStaticProps() {
    const files = fs.readdirSync("src/posts")

    const posts = files.map(filename => {
        const slug = filename.replace(".md", "")
        const fileContent = fs.readFileSync(path.join("src/posts", filename), "utf8")
        const { data } = matter(fileContent)

        return {
            slug,
            title: data.title,
            date: data.date,
        }
    })

    return {
        props: {
            posts
        }
    }
}

export default function Blog({ posts }: { posts: BlogPostProps[] }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="font-header text-2xl font-bold">Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}