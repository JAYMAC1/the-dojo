import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// Pages and Components
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/projects/:id'>
              <Project />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
