import { Link } from 'react-router-dom'

// Styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'

const Navbar = () => {
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
          <Button className='btn'>Logout</Button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
