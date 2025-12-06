import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';


export function RegisterUsers() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Email: '',
            Mobile: 0
        },
        validationSchema: yup.object({
            UserId: yup.string().required('UserId Required'),
            UserName: yup.string().required('User Name Required'),
            Password: yup.string().required('Password Required'),
            Email: yup.string().required('Email Id Required'),
            Mobile: yup.number().required('Mobile Number Required')
        }),
        onSubmit: (users) => {
            axios.post('http://127.0.0.1:7868/register-user', users);
            console.log(users);
            alert('Register Users Successfully.....');
            navigate('/login')
        }
    })

    return (
        <div className=" bg-primary w-100 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form action="" onSubmit={formik.handleSubmit} className="bg-white w-50 my-4 rounded rounded-4 p-3"   >
                <h3 className="text-dark">Registration</h3>
                <div className="my-4">
                    <div className="input-group">
                        <span className="bi bi-person text-primary input-group-text"></span>
                        <input type="text" className="form-control" onChange={formik.handleChange} placeholder="Enter Your UserId" name="UserId" id="" />

                    </div>
                    <p className="text-danger">{formik.errors.UserId}</p>
                </div>


                <div>
                    <div className="input-group">
                        <span className="bi bi-person-fill text-primary input-group-text"></span>
                        <input type="text" className="form-control" onChange={formik.handleChange} placeholder="Enter Your Name" name="UserName" id="" />
                    </div>
                    <p className="text-danger">{formik.errors.UserName}</p>

                </div>


                <div className="my-4">
                    <div className="input-group ">
                        <span className="bi bi-lock text-primary input-group-text"></span>
                        <input type="text" className="form-control" onChange={formik.handleChange} placeholder="Enter Your Password" name="Password" id="" />
                    </div>
                    <p className="text-danger">{formik.errors.Password}</p>

                </div>

                <div>
                    <div className="input-group">
                        <span className="bi bi-envelope-at-fill text-primary input-group-text"></span>
                        <input type="text" className="form-control" onChange={formik.handleChange} placeholder="Enter Your Email" name="Email" id="" />
                    </div>
                    <p className="text-danger">{formik.errors.Email}</p>

                </div>

                <div className="my-4">
                    <div className="input-group ">
                        <span className="bi bi-telephone text-primary input-group-text"></span>
                        <input type="number" className="form-control" onChange={formik.handleChange} placeholder="Enter Your Mobile" name="Mobile" id="" />
                    </div>
                    <p className="text-danger">{formik.errors.Mobile}</p>

                </div>


                <div className="text-center">
                    <button className="btn btn-success me-4 w-25" type="submit">Register</button>
                    <Link to='/main' className="btn btn-danger w-25">Cancel</Link>
                </div>
            </form>


        </div>
    )
}