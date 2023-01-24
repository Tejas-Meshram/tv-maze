import { Link } from "react-router-dom"

const ShowList = ({image, name, rating, id}) => {
  return (
    <Link to={`/showdetail/${id}`} className="listshow">
        <img src={image} alt={name} />
        <div className="listshow-info">
            <h4 className="info-name">{name}</h4>
            <h4 className="info-rating">{rating}</h4>
        </div>
    </Link>
  )
}

export default ShowList