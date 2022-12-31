import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import ProjectItem from '../components/ProjectItem'
import { getAllProjects } from '../lib/api'
import { Post, Project } from '../lib/types'
import posts from '../_data/posts'

type Props = {
  posts: Post[]
  projects: Project[]
}

export default function Home({ posts, projects }: Props) {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row-reverse gap-6 mt-14">
        <Image
          src="/avatar.jpg"
          alt="Praveen Kumar"
          width={130}
          height={130}
          sizes="30vw"
          className="rounded-full grayscale"
        />
        <div>
          <h1 className="text-3xl font-bold m-0">Praveen Kumar</h1>
          <h2 className=" mb-5">Full Stack Developer</h2>
          <p className="text-gray-600">
            Building fast and scalable web applications with a modern tech stack. Exploring DevOps
            world - Kubernetes, CI/CD, Terraform, etc.
          </p>
        </div>
      </div>

      <h1 className="text-[1.6rem] font-bold mb-6 mt-14">Featured Posts</h1>
      <div className="flex flex-col gap-6">
        {posts &&
          posts.map((post) => (
            <PostItem title={post.title} excerpt={post.excerpt} slug={post.slug} key={post.title} />
          ))}
      </div>
      <Link href="https://blog.pkkulhari.com" className="flex items-center gap-1 mt-6">
        <span className="text-lg font-bold">All Posts</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 ml-1"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
          />
        </svg>
      </Link>

      <h1 className="text-[1.6rem] font-bold mb-6 mt-14">Featured Projects</h1>
      <div className="flex flex-col gap-6">
        {projects &&
          projects.map((project) => (
            <ProjectItem
              title={project.title}
              excerpt={project.excerpt}
              techs={project.techs}
              slug={project.slug}
              github={project.github}
              external={project.external}
              key={project.title}
            />
          ))}
      </div>
      <Link href="/projects" className="flex items-center gap-1 mt-6">
        <span className="text-lg font-bold">All Projects</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 ml-1"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
          />
        </svg>
      </Link>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects(true, true)

  return {
    props: {
      posts,
      projects,
    },
  }
}
