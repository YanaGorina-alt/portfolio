import { useState } from 'react'
import CategoryButton from './CategoryButton'

const ProjectsCategories = ({categories, onFilterProjects}) => {
    const [activeCtegory, setActiveCategory] = useState("all");

const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
}


  return (
    <div className='portfolio__categories'>
        {
            categories.map(category => (
                <CategoryButton key={category} category={category} onChangeCategory={()=> changeCategoryHandler(category)} className={`btn cat__btn ${activeCtegory===category ? 'primary' : 'white'}`}/>
            ))
        }
    </div>
  )
}

export default ProjectsCategories