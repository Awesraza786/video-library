import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function Login() {

    const [cookie, setCookie, removeCookie] = useCookies(['Username']);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserPassword: ''
        },
        onSubmit: (user) => {
            axios.get('http://127.0.0.1:7868/get-users')
                .then(response => {
                    var result = response.data.find(value => value.UserId === user.UserId);
                    if (result) {
                        if (result.Password === user.UserPassword) {
                            setCookie('Username', result.UserName);
                            console.log(result.UserName);
                            navigate('/video-dash')
                        } else {
                            alert('User Password Invalid')
                        }
                    } else {
                        alert('User Id Invalid')
                    }
                })
        }
    })

    return (
        <div className="User-login d-flex justify-content-center align-items-center">
            <div className="border bg-light rounded rounded-5 border-3  w-25">
                <h2 className="text-center text-primary">Welcome User</h2>
                <div className="admin w-100 text-light fw-bold fs-3 text-center"></div>

                <form className='p-2' onSubmit={formik.handleSubmit}>
                    <h2 className="text-center text-primary">User Login</h2>
                    <div className="input-group">
                        <span className="bi bi-person-fill  btn btn-primary input-group-text"></span>
                        <input type="text" autoFocus name="UserId" onChange={formik.handleChange} placeholder="User Id" className="form-control" id="" />
                    </div>
                    <div className="input-group mt-3">
                        <span className="bi bi-lock btn btn-primary input-group-text"></span>
                        <input type="text" onChange={formik.handleChange} name="UserPassword" placeholder="User Password" className="form-control" id="" />
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