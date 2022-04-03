import axios from "axios";

const useDeleteAdmin = (url:string)=> {
    async function fetchData(){
        const response = await axios.delete(url);
        console.log(response);
    }
    fetchData();
}

export default useDeleteAdmin;