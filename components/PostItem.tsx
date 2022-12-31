import React from 'react'

type Props = {
  title: string
  excerpt: string
  slug: string
}

const PostItem = ({ title, excerpt, slug }: Props) => {
  return (
    <a href={`https://blog.pkkulhari.com/${slug}`}>
      <article>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{excerpt}</p>
      </article>
    </a>
  )
}

export default PostItem
