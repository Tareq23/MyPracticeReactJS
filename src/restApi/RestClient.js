
import axios from 'axios';


class RestClient{
    static GetRequest = (getUrl) =>
    {
        return axios.get(getUrl)
                .then(response=>{
                    return response.data;
                })
                .catch(error=>{
                    return null;
                });
    }
    static PostRequest = (getUrl,postJson) => {
        let config = {
            headers : {'Content-Type':'application/x-www-form-urlencoded',}
        }
        return axios.post(getUrl,postJson,config)
                    .then(response=>{
                         return response.data;
                    })
                    .catch(error=>{
                        // return error + "<br> from RestClient catch";
                        console.log(error);
                    });
    }
}


export default RestClient;