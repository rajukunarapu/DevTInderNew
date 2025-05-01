import Axios from 'axios'

// profile get service
const getProfileAPI = async()=>{
    const res = await Axios.get(`${import.meta.env.VITE_SERVER_URL}/profile/view`,{
        headers:{
            "Content-Type" : "application/json"
        },
        withCredentials: true
    })
    const data = res.data
    return data
}

export default getProfileAPI