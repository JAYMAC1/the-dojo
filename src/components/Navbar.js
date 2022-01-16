import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// Styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'

const Navbar = () => {
  const { logout, isPending } = useLogout()

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='dojo logo' />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          {isPending && (
            <button disabled className='btn'>
              Logging out...
            </button>
          )}
          {!isPending && (
            <button onClick={logout} className='btn'>
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
