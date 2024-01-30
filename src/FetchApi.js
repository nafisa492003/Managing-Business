import axios from 'axios';
export const FetchApi =async (url)=>{
const  data =await axios.get(url)
return data;
};