export type Post = {
  title: string
  excerpt: string
  slug: string
}

export type Project = {
  title: string
  excerpt: string
  techs: string[]
  content: string
  slug?: string
  github?: string
  external?: string
  featured?: boolean
  date: string
}
