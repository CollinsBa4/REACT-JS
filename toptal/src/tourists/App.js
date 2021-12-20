import React,{useState,useEffect} from 'react'
import {Loading} from './Loading'
import {Tours} from './Tours'

const url = 'https://course-api.netlify.app/api/react-tours-project';
 const Apps = () => {
    const [loading,setLoading] = useState(true)
    const [tours,setTours] = useState([])

    const fetchTours = async () => {
        try {
            const res = await fetch(url)
        const tours = await res.json()
            setLoading(true)
        setTours(tours)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
         
    };

    useEffect(() => {
        fetchTours();
    },[])

    if(loading){
        return (
            <main>
                <Loading/>
            </main>
        )
    }


    return (
        <main>
            <Tours tours= {tours}/>
        </main>
    )
}




export default Apps