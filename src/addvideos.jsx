import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export function AddVideos() {

    const [categories, setCategories] = useState([{ categoryId: 0, CategoryName: '' }]);
    const navigate = useNavigate()
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
    useEffect(() => {
        LoadCategories();
    }, [])


    const formik = useFormik({
        initialValues: {
            VideoId: 0,
            Title: '',
            Url: '',
            Description: '',
            Like: 0,
            DisLike: 0,
            Views: 0,
            CategoryId: 0
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
        onSubmit: (video) => {
            axios.post('http://127.0.0.1:7868/add-video', video);
            // console.log(video)
            alert('Video Added');
            navigate('/admin-dash')
        }
    })
    return (
        <div className="bg-light d-flex justify-content-center align-items-center flex-column add-video-panel">
            <form action="" onSubmit={formik.handleSubmit} className="w-75 border border-3 p-3 rounded rounded-3 ">
                <h2 className="text-center mb-4 bg-secondary rounded rounded-3 p-1">Add Videos</h2>
                <div className="row mt-3">
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="VideoId">VideoId</label>
                        <div>
                            <input type="number" onChange={formik.handleChange} name="VideoId" placeholder="AdminId" className="form-control bg-transparent text-light" id="" />
                            <p className="text-danger">{formik.errors.VideoId}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Title">Title</label>
                        <div>
                            <input type="text" name="Title" id="" placeholder="Title" onChange={formik.handleChange} className="form-control bg-transparent text-light" />
                            <p className="text-danger">{formik.errors.Title}</p>
                        </div>
                    </div>
                </div>




                <div className="row mt-3">
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Url">Url</label>
                        <div>
                            <input type="text" onChange={formik.handleChange} placeholder="Url" className="form-control bg-transparent text-light" name="Url" id="" />
                            <p className="text-danger">{formik.errors.Url}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Description">Description</label>
                        <div>
                            <textarea onChange={formik.handleChange} name="Description" placeholder="Description" className="form-control bg-transparent text-light" id="" ></textarea>
                            <p className="text-danger">{formik.errors.Description}</p>
                        </div>
                    </div>
                </div>



                <div className="row mt-3">
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Like">Like</label>
                        <div>
                            <input type="number" onChange={formik.handleChange} name="Like" placeholder="Like" className="form-control bg-transparent text-light" id="" />
                            <p className="text-danger">{formik.errors.Like}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="DisLike">DisLike</label>
                        <div>
                            <input onChange={formik.handleChange} type="number" name="DisLike" placeholder="DisLike" className="form-control bg-transparent text-light" id="" />
                            <p className="text-danger">{formik.errors.DisLike}</p>
                        </div>
                    </div>
                </div>



                <div className="row mt-3">
                    <div className="col-6">
                        <label className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1" htmlFor="Views">Views</label>
                        <div>
                            <input onChange={formik.handleChange} type="number" name="Views" placeholder="Views" className="form-control bg-transparent text-light" id="" />
                            <p className="text-danger">{formik.errors.Views}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <label htmlFor="Categories" className="form-label fw-bold bg-light w-25 rounded rounded-3 p-1">Categories</label>
                        <select onChange={formik.handleChange} name="CategoryId" className="form-select bg-transparent text-danger fw-bold" id="">
                            {
                                categories.map(category => <option key={category.categoryId} className="text-dark">{category.CategoryName}</option>)
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