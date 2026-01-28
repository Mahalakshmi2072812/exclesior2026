import { Link } from "react-router-dom"
const FloatingIcon = () => {

  return (
    <Link to="/uploadPaper">
    <div className="floating-icon">
       <i className="bi bi-send-check-fill floaticon"></i>
    </div>
    </Link>
  )
}

export default FloatingIcon