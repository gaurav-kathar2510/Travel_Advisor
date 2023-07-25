import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData = async () => {
    try {
        //request
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: '11.847676',
                tr_latitude: '12.838442',
                bl_longitude: '109.095887',
                tr_longitude: '109.149359',
            },
            headers: {
                'X-RapidAPI-Key': '4f02dd45f1msh70868d84fec3c29p1d419ajsnadd9ed32e527',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data
    } catch (error) {
        console.log(error);

    }
}