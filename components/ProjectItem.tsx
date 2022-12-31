import React from 'react'

type Props = {
  title: string
  excerpt: string
  techs: string[]
  slug?: string
  github?: string
  external?: string
}

const ProjectItem = ({ title, excerpt, techs, github, external, slug }: Props) => {
  return (
    <article>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{excerpt}</p>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        <ul className="flex items-center gap-x-3 gap-y-2 flex-wrap">
          {techs.map((tech, index) => (
            <li className="text-xs text-gray-600 bg-gray-200  py-1 px-2 rounded-md" key={index}>
              {tech}
            </li>
          ))}
        </ul>
        {(github || slug) && (
          <div className="flex justify-between gap-4">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="p-1 z-10">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                  </svg>
                </div>
              </a>
            )}
            {external && (
              <a href={external} target="_blank" rel="noreferrer" className="p-1 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 "
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3L21 3 21 9"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectItem
