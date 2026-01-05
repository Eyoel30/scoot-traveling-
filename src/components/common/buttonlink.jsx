import { Link } from 'react-router-dom'
import "./button.css"
export default function Button({button}) {
  return (
    <Link to={button.path} className={button.classname}>    {button.label}
    </Link>
  )
}