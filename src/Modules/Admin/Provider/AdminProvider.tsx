import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useGetAdminById } from '../CustomisedHooks/getsinglehooks';
import { IAdmin } from '../Models/admin_interface';
import { AdminModel } from '../Models/admin_model';

//initialisation du context qui sera utilise dans les autres
//component pour prendre les differents states globales
export const AdminContext = createContext({user:AdminModel,page:0,changeUser:(admin:IAdmin)=>{},changePage:(page:number)=>{}});

//component qui sera de placer en au niveau pour les states globales soient
//partager avec les components fils
export const AdminProvider = ({children}:any) => {
    const [user,setUser] = useState(AdminModel);
    const [page,setPage] = useState(1);
    const changeUser = (admin:IAdmin) => {
        console.log("changement d'utilisateur");
        console.log(admin);
        localStorage.setItem("id",admin._id);
        setUser(admin);
    }

    const changePage = (page_parameter:number)=>{
        setPage(page_parameter);
    }

    useEffect(()=>{
        async function getAdmin(){
            const response = await axios.get(`http://localhost:8081/get/administration/${localStorage.getItem('id')}`);
            setUser(response.data.result);
        }
        getAdmin();
    },[localStorage.getItem('id')])

    return (
        <AdminContext.Provider value={{user,page,changeUser,changePage}}>
            {children}
        </AdminContext.Provider>
    )
}