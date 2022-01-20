import { useState } from 'react'

// Styles
import './Dashboard.css'

const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
]

const ProjectFilter = () => {
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    console.log(newFilter)
    setCurrentFilter(newFilter)
  }
  return (
    <div className='project-filter'>
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={f === currentFilter ? 'active ' : ''}>
            {f}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default ProjectFilter
