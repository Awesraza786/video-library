import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";



export function Videodash() {

    const [cookie, setCookie, removeCookie] = useCookies(['Username']);
    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:7868/get-videos').then(response => {
            setVideos(response.data);
        })
    }, [])
    return (
        <div>
            <h1>Hello {cookie.Username.toUpperCase()} </h1>
        </div>
    )
}