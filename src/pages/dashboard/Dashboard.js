import { useState } from 'react'
import ProjectList from '../../components/ProjectList'
import { useCollection } from '../../hooks/useCollection'

// styles
import './Dashboard.css'
import ProjectFilter from './ProjectFilter'

const Dashboard = () => {
  const [currentFilter, setCurrentFilter] = useState('all')
  const { documents, error } = useCollection('projects')

  const updateFilter = (filter) => {
    setCurrentFilter(filter)
  }

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          updateFilter={updateFilter}
        />
      )}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}

export default Dashboard
