import { useGlobalContext } from "../context"
import ShowList from "../components/ShowList";
import Loading from "../components/Loading";
import ListAll from "../components/ListAll";

const imgSrc = 'https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png'
const categories = ['Action', 'Comedy','Drama','Crime','Romance','Science-Fiction','Thriller'];

const Home = () => {

    const { shows, loading, searchTerm } = useGlobalContext();


    if(loading) {
        return <Loading/>;
    }

    if(searchTerm){
        return (
        <div className='home'>
            <div className="home-list-container">
                {shows.map((show) => {
                    return (
                        <ShowList
                        key={show.show.id}
                        id={show.show.id}
                        image={show.show.image ? show.show.image.medium : imgSrc}
                        name={show.show.name}
                        rating={show.show.rating.average ? show.show.rating.average : "no rating"}
                    />
                );
                })}
            </div>
        </div>
        );
    }
  return (
    <div className="list-container">
    {categories.map((category)=> {
        return (
            <div>
                <ListAll category={category}/>
            </div>
        );
    })}
    </div>
  )
}

export default Home