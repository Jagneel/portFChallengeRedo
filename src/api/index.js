import axios from 'axios'

export const fetchData = async () => {
    
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=80`);
    const data = await response.json();
    
    return data
    
}