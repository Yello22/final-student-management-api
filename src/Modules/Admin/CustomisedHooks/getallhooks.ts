import { useState,useEffect } from "react";
import axios from 'axios';

export const useGetAllAdmin = (url:string,page:number) => {
    const [admins,setAdmins] = useState([]);
    const [endpages,setEndPages] = useState<number>(0);

    useEffect(()=>{
        async function getAll(){
            //obtenir la liste des admins 10 par 10 a partir du numero de page
            const response = await axios.get(url+"?page="+page);
            setAdmins(response.data.admin);
            let admin_count : number = response.data.count;
            admin_count = Math.ceil(admin_count / 10);
            setEndPages(admin_count);
        }
        getAll();
    },[url,page])//quand l'utilisateur change de page le hooks fait un rerender

    return {admins,endpages};
}