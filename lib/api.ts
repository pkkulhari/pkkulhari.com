import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project } from './types'

const PROJECTS_DIR = path.join(process.cwd(), '_data/projects')

export const getAllSlugs = () => {
  const slugs = fs.readdirSync(PROJECTS_DIR)

  return slugs.map((slug) => slug.replace(/\.md$/, ''))
}

export const getProjectBySlug = (slug: string, metaOnly = false): Project => {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath)
  const { data, content } = matter(fileContents)

  if (metaOnly) {
    return {
      slug,
      ...data,
    } as Project
  }

  return {
    slug,
    content,
    ...data,
  } as Project
}

export const getAllProjects = async (metaOnly = false, featuredOnly = false) => {
  const slugs = getAllSlugs()

  const projects = slugs
    .map((slug) => getProjectBySlug(slug, metaOnly))
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  if (featuredOnly) {
    return projects.filter((project) => project.featured)
  }

  return projects
}
