import { useGlobalContext } from "../context"

const SearchBar = () => {

    const { searchTerm, setSearchTerm, handleSearch } = useGlobalContext();
  return (
    <div className='searchbar'>
        <form className='search-form'>
            <input type="text" placeholder='Search for Tv Show'
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}/>
             <button className="btn search-btn" onClick={handleSearch}>Search</button>
        </form>
    </div>
  )
}

export default SearchBar