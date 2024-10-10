import type{ GiphResponse } from "../interfaces/gif.response";


const apiKey = 'Ou0703LsEf749kBDtdGQ3LFYwMCtzHgs';


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
                    .then(resp=>resp.json())
                    .then((body:GiphResponse)=>console.log(body.data.images.downsized_medium.url))
                    .catch(err=>console.error(err))




                    