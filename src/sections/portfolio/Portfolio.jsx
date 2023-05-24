import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import './portfolio.css'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects , setProjects] = useState(data);
  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if(category==="all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project =>project.category === category);
    setProjects(filterProjects);
  }

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Take a glimpse at some of my recent projects I've been working on.</p>
      <div className="container container__portfolio">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio