// Styles
import './Avatar.css'

const Avatar = ({ src }) => {
  return (
    <div className='avatar'>
      <img src={src} alt='users avatar' />
    </div>
  )
}

export default Avatar
