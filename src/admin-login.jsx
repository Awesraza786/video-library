import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function AdminLogin() {
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['adminId']);

    const formik = useFormik({
        initialValues: {
            adminId: '',
            password: ''
        },

        onSubmit: (admin) => {
            // console.log(admin.adminId);
            axios.get('http://127.0.0.1:7868/get-admin')
                .then(response => {
                    var admins = response.data.find(item => item.AdminId === admin.adminId)
                    if (admins) {
                        if (admin.password === admins.password) {
                            setCookie('adminId', admin.adminId);
                            navigate('/admin-dash');
                        } else {
                            alert('Incorrect Password')
                        }
                    } else {
                        alert("Incorrect AdminId")
                    }
                })
        }


    })

    return (
        <div className="admin-login d-flex justify-content-center align-items-center">
            <div className="border bg-light rounded rounded-5 border-3  w-25">
                <h2 className="text-center">Welcome Admin</h2>
                <div className="admin w-100 text-light fw-bold fs-3 text-center"></div>
                <form className='p-2' onSubmit={formik.handleSubmit}>
                    <h2 className="text-center">Admin Login</h2>
                    <div className="input-group">
                        <span className="bi bi-person-fill btn btn-warning input-group-text"></span>
                        <input type="text" autoFocus name="adminId" onChange={formik.handleChange} placeholder="Admin Id" className="form-control input-group-text" id="" />
                    </div>
                    <div className="input-group mt-3">
                        <span className="bi bi-lock btn btn-warning input-group-text"></span>
                        <input type="text" onChange={formik.handleChange} name="password" placeholder="Admin Password" className="form-control input-group-text" id="" />
                    </div>
                    <div className="text-center mt-3">
                        <button type="submit" className="btn me-3 btn-success">Login</button>
                        <Link to={"/main"} className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}