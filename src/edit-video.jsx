import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';

export function EditVideos() {

    const [categories, setCategories] = useState([{ categoryId: 0, CategoryName: '' }]);
    const [video, setVideo] = useState({ VideoId: 0, Title: '', Url: '', Description: '', Like: 0, DisLike: 0, Views: 0, CategoryId: 0 });




    const navigate = useNavigate()
    const params = useParams();





    function LoadCategories() {
        axios.get('http://127.0.0.1:7868/get-categories')
            .then(response => {
                response.data.unshift({
                    categoryId: 0,
                    CategoryName: 'Select Category'
                })
                setCategories(response.data);

            })
    }








    const formik = useFormik({
        initialValues: {
            VideoId: video.VideoId,
            Title: video.Title,
            Url: video.Url,
            Description: video.Description,
            Like: video.Like,
            DisLike: video.DisLike,
            Views: video.Views,
            CategoryId: video.CategoryId
        },
        validationSchema: Yup.object({
            VideoId: Yup.number().required().min(1, 'Please Enter Admin Id'),
            Title: Yup.string().required('Title Required'),
            Url: Yup.string().required('Url Required'),
            Description: Yup.string().required('Description Required'),
            Like: Yup.number().required('Like Required'),
            CategoryId: Yup.number(),
            DisLike: Yup.number().required('DisLike Required'),
            Views: Yup.number().required('Views Required')
        }),
        onSubmit: (edited) => {
            axios.put(`http://127.0.0.1:7868/edit-video/${params.id}`, edited);
            console.log(edited)
            alert('Video Edited');
            navigate('/admin-dash')
        },
        enableReinitialize: true
    });

    useEffect(() => {
        LoadCategories();
        // console.log(params.id);


        axios.get(`http://127.0.0.1:7868/get-video/${params.id}`)
            .then(response => {
                setVideo(response.data);
                console.log(response.data)
            });
    }, [params.id]);


    return (
        <div className="bg-light d-flex justify-content-center align-items-center flex-column edit-video-panel">
            <form action="" onSubmit={formik.handleSubmit} className="w-75 border border-3 p-3 rounded rounded-3 ">
                <h2 className="text-center mb-4 bg-secondary rounded rounded-3 p-1">Edit Videos</h2>
                <div className="row mt-3">
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="VideoId">VideoId</label>
                        <div>
                            <input type="number" value={formik.values.VideoId} onChange={formik.handleChange} name="VideoId" placeholder="Video Id" className="form-control bg-transparent text-dark" id="" />
                            <p className="text-danger">{formik.errors.VideoId}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Title">Title</label>
                        <div>
                            <input type="text" name="Title" value={formik.values.Title} id="" placeholder="Title" onChange={formik.handleChange} className="form-control bg-transparent text-dark" />
                            <p className="text-danger">{formik.errors.Title}</p>
                        </div>
                    </div>
                </div>




                <div className="row mt-3">
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Url">Url</label>
                        <div>
                            <input type="text" onChange={formik.handleChange} value={formik.values.Url} placeholder="Url" className="form-control bg-transparent text-dark" name="Url" id="" />
                            <p className="text-danger">{formik.errors.Url}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Description">Description</label>
                        <div>
                            <textarea onChange={formik.handleChange} value={formik.values.Description} name="Description" placeholder="Description" className="form-control bg-transparent text-dark" id="" ></textarea>
                            <p className="text-danger">{formik.errors.Description}</p>
                        </div>
                    </div>
                </div>



                <div className="row mt-3">
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Like">Like</label>
                        <div>
                            <input type="number" value={formik.values.Like} name="Like" onChange={formik.handleChange} placeholder="Like" className="form-control bg-transparent text-dark" id="" />
                            <p className="text-danger">{formik.errors.Like}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="DisLike">DisLike</label>
                        <div>
                            <input type="number" name="DisLike" value={formik.values.DisLike} onChange={formik.handleChange} placeholder="DisLike" className="form-control bg-transparent text-dark" id="" />
                            <p className="text-danger">{formik.errors.DisLike}</p>
                        </div>
                    </div>
                </div>



                <div className="row mt-3">
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Views">Views</label>
                        <div>
                            <input type="number" name="Views" value={formik.values.Views} onChange={formik.handleChange} placeholder="Views" className="form-control bg-transparent text-dark" id="" />
                            <p className="text-danger">{formik.errors.Views}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <label htmlFor="Categories" className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1">Categories</label>
                        <select onChange={formik.handleChange} value={formik.values.CategoryId} name="CategoryId" className="form-select bg-transparent text-danger fw-bold" id="">
                            {
                                categories.map(category => <option key={category.categoryId} value={category.categoryId} className="text-dark">{category.CategoryName}</option>)
                            }
                        </select>
                        <p className="text-danger">{formik.errors.CategoryId}</p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-success me-4">Add Videos</button>
                    <Link to={'/admin-dash'} className="btn btn-danger">Cancel</Link>
                </div>

            </form>

        </div>
    )
}