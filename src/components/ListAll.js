import { useState, useEffect } from "react"
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const url = 'https://api.tvmaze.com/search/shows?q=';
const imgSrc = 'https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png'

const ListAll = ({category}) => {

    const [categorisedShows, setCategorisedShows] = useState([]);
    const size = 5;
    const { loading, setLoading } = useGlobalContext();

    const fetchShows = async (category) => {
        setLoading(true);
        const response = await fetch(`${url}${category}`);
        const data = await response.json();
        //console.log(data);
        setCategorisedShows(data);
        setLoading(false);
    }

    useEffect(()=> {
        fetchShows(category);
    },[loading])
    
  return (
    <div className="list-container">
        <h3 className="showcategory">{category}</h3>
            {categorisedShows.slice(0,size).map(item => {
                const {id, name, image} = item.show;
                return (
                    <Link to={`/showdetail/${id}`} className="listshow" key={id}>
                    <img src={image ? image.medium : imgSrc} alt={name} />
                    <div className="listshow-info">
                     <h4 className="info-name">{name}</h4>
                    </div>
                </Link>
                );
            })}
     </div>
  )
}

export default ListAll