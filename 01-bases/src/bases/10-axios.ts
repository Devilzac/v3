import axios from "axios";
import { GiphResponse } from "../interfaces/gif.response";


const apiKey = 'Ou0703LsEf749kBDtdGQ3LFYwMCtzHgs';

export const giphyApi = axios.create({
     baseURL: `https://api.giphy.com/v1/gifs`,
     params: {
        api_key: apiKey
     }
})
// export default giphyApi


// giphyApi.get<GiphResponse>('/random')
//             .then( resp=>console.log(resp.data.data.images.downsized_medium.url) )
//             .catch( err=>console.error(err) )