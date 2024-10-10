
import { giphyApi } from "./10-axios";
import { GiphResponse } from '../interfaces/gif.response';


// export const getImage = async ()=>{

//     return 'http://url.com'
// } 
export const getImage = async ()=>{

    try {
        const resp = await giphyApi.get<GiphResponse>('/random')
        return resp.data.data.images.downsized_medium.url        
    } catch (error) {
        console.error(error)
    }
} 

console.log(await getImage());
;