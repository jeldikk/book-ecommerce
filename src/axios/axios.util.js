import axios from 'axios'

export const fetchBookData = async () => {
    const config = {
        method: 'GET',
        url: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json'
    }

    const result = await axios(config);
    
    return result
}