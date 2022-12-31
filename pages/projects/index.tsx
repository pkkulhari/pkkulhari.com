import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import ProjectItem from '../../components/ProjectItem'
import { getAllProjects } from '../../lib/api'
import { Project } from '../../lib/types'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <Layout
      title="Projects - Praveen Kumar"
      description="Collection of projects that I have built so far including web development and others"
    >
      <h1 className="text-3xl font-bold mb-6 mt-14">All Projects</h1>
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
    </Layout>
  )
}

export default Projects

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects(true)

  return {
    props: {
      projects,
    },
  }
}
