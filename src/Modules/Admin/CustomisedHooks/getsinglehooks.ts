import { useEffect } from 'react';
import { AdminModel } from '../Models/admin_model';
import { useState } from 'react';
import axios from 'axios';

//recuperer admin par son id
export const useGetAdminById = (url:string,id:string | undefined) => {
    let [admin,setAdmin] = useState(AdminModel);
    console.log(id);
    useEffect(()=>{
        async function fetchData(){
            let response = await axios.get(`${url}/${id}`);
            setAdmin(response.data.result);
            console.log(response);
        }
        fetchData()
    },[url,id]);

    return admin;
}