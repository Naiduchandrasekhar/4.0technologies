// Write your code here.
import './index.css'

const CompnentCard = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard
  return (
    <li className={`card ${className}`}>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CompnentCard
