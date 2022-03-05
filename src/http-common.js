import axios from "axios";

export const HTTP = axios.create({
    baseURL : "https://www.blibli.com/backend/search/",
    headers: {
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Headers' : '*'     
    }
})