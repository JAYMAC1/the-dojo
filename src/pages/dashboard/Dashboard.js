import { useState } from 'react'
import ProjectList from '../../components/ProjectList'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Dashboard.css'
import ProjectFilter from './ProjectFilter'

const Dashboard = () => {
  const [currentFilter, setCurrentFilter] = useState('all')
  const { documents, error } = useCollection('projects')
  const { user } = useAuthContext()

  const updateFilter = (filter) => {
    setCurrentFilter(filter)
  }
  console.log(documents)
  const projects = documents
    ? documents.filter((project) => {
        console.log(project.category)
        switch (currentFilter) {
          case 'all':
            return true
          case 'mine':
            let assignedToMe = false
            project.assignedUsersList.forEach((u) => {
              console.log(user.uid, u.id)
              if (user.uid === u.id) {
                assignedToMe = true
              }
            })
            console.log(assignedToMe)
            return assignedToMe
          case 'development':
          case 'design':
          case 'marketing':
          case 'sales':
            return project.category === currentFilter
          default:
            return true
        }
      })
    : null

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
      {projects && <ProjectList projects={projects} />}
    </div>
  )
}

export default Dashboard
