import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context"
import Loading from "../components/Loading"

const imgSrc = 'https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png'

const ShowDetail = () => {

    const {id} = useParams();
    const { getShowDetail, singleShow, loading} = useGlobalContext();

    useEffect(()=> {
        getShowDetail(id);
    },[]);

    const removeTags = (text) => {
        if (text === null || text === ""){
            return false;
        } else {
            text = text.toString();
        }
     return text.replace(/(<([^>]+)>)/gi, "");
    };


    if(loading) {
        return <Loading/>;
    }
  return (
    <>
        <div className="singleshow">
            <img src={singleShow.image ? singleShow.image.medium : imgSrc} alt={singleShow.name} />
            <div className="singleshow-info">
                <h1>{singleShow.name}</h1>
                {singleShow.genres && singleShow.genres.map(genre => {
                    return (
                        <span key={genre} className="singleshow-genre">{genre}</span>
                    );
                })}
                <p>
                    <strong>Status:</strong>{singleShow.status && singleShow.status}
                </p>
                <p>
                    <strong>Rating:</strong>{singleShow.rating ? singleShow.rating.average : 'No rating'}
                </p>
                <p>
                    {singleShow.summary ? removeTags(singleShow.summary) : 'No Details Available'}
                </p>
            </div>
        </div>
    </>
  )
}

export default ShowDetail