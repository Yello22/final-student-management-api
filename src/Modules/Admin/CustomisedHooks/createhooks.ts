import { IAdmin } from '../Models/admin_interface';
import axios from 'axios';

export const usePostAdmin = (url:string,admin:IAdmin) => {
    async function fetchData(){
        const response = await axios.post(url,admin);
        console.log(response);
    }
    fetchData();
}