import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, Outlet, useNavigate } from "react-router-dom";

export function AdminDash() {
    const [cookies, setCookie, removeCookie] = useCookies(['adminId']);
    const [videos, setVideos] = useState([{ VideoId: 0, Title: '', Url: '', Description: '', Likes: 0, Dislikes: 0, Views: '', Comments: [''], CategoryId: 0 }])
    useEffect(() => {
        axios.get('http://127.0.0.1:7868/get-videos')
            .then(response => {
                setVideos(response.data);
            })
    }, [])
    const navigate = useNavigate();
    function handleAdminLogout() {
        removeCookie('adminId');
        setTimeout(() => {
            navigate('/admin-login');
        }, 0);
    }


    return (
        <div className="adminDashboard">
            <div className="d-flex justify-content-between p-3 align-items-center" style={{ marginBottom: '250px' }}>
                <div className="">
                    <Link to="/add-videos" className="btn btn-primary bi bi-camera-video" > Add Video</Link>
                </div>
                <div>
                    <h2 className="text-light"> Hello {cookies.adminId ? cookies.adminId.toUpperCase() : 'Guest'}</h2>
                </div>
                <div>
                    <button to className="btn btn-danger" onClick={handleAdminLogout}>Log Out</button>
                </div>
            </div>
            <div className="p-3">
                <table className="w-100 table text-primary  table-hover table-bordered table-warning">
                    <thead className="bg-dark">
                        <tr>
                            <th className="text-center">VideoId</th>
                            <th className="text-center">Title</th>
                            <th className="text-center">Video Preview</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            videos.map(video =>
                                <tr key={video.VideoId}>
                                    <td> {video.VideoId}</td>
                                    <td>{video.Title} </td>
                                    <td><iframe src={video.Url} width='350px' height='150px' ></iframe></td>
                                    <td>
                                        <Link to={`/edit-videos/${parseInt(video.VideoId)}`} className="bi bi-pen-fill btn btn-warning me-3"></Link>
                                        <button className="bi bi-trash-fill btn btn-danger"></button>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}