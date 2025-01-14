import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {useState} from 'react';
import styles from '../css/searchBar.module.css';

function SearchBar () {

    // const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");  
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
    
        if (searchWord === "") {
        //   setFilteredData([]);
            setIsSearching(false);
        } else {
        //   setFilteredData(searchWord);
          setIsSearching(true);
        }
    }
    
    const clearInput = () => {
        // setFilteredData([]);
        setWordEntered("");
        setIsSearching(false);
    };
    
    const BarIcon = isSearching ? CloseIcon : SearchIcon;

    return (
        <div className={styles.search}>
            <input 
                type="text" 
                className={styles.searchTerm}
                placeholder="Enter a Book Name..."
                value={wordEntered}
                onChange={handleSearch}
                />
            <BarIcon
                className={styles.searchButton}
                onClick={clearInput}/>
        </div>
    );
}

export default SearchBar;