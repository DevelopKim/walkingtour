import { cities } from './data' 
// cities 
// get cities data 

export default function getCitiesData(){
    return cities. map( city => {
        return {
            name: city.name,
            url: city.url,
            id: city.url.replace('https://youtu.be/', '')
        }
    })

}
