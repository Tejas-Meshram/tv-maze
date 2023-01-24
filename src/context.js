import  { useState, useEffect, useContext, createContext} from "react";

const url = 'https://api.tvmaze.com/search/shows?q=';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [shows, setShows] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [singleShow, setSingleShow] = useState({});

    const searchShows = async (searchTerm) => {
        setLoading(true);
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json();
        setShows(data);
        setLoading(false);
        //console.log(data);
    }

    useEffect(()=> {
        searchShows(searchTerm);
    },[searchTerm])
    

    const handleSearch = (e) => {
        e.preventDefault();
        //console.log(searchTerm);
        searchShows(searchTerm);
    }

    const getShowDetail = async (id) => {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json();
        setSingleShow(data);
    }
 
    return (
        <AppContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                handleSearch,
                shows,
                getShowDetail,
                singleShow,
                loading,
                setLoading
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};