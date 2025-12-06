import { Link } from "react-router-dom";



export function MainContent() {
    return (
        <div className="bg-light w-100 mainContainer" >
            <div className="shadow  pt-3">
                <div className="d-flex  justify-content-around">
                    <div className="">
                        <span className="text-success fs-4  rounded rounded-3">All Video's</span>
                    </div>
                    <div>
                        <Link to='/admin-login' className="btn btn-primary">Admin Login</Link>
                    </div>
                    <div>
                        <Link to={'/register-users'} className="btn btn-danger">Register</Link>
                        <Link to={'/login'} className="btn btn-warning ms-3">Login</Link>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center h-75">
                    <h1 className="text-primary mb-4 bg-black text-light p-2 rounded rounded-4">Welcome User's & Admin </h1>
                    <div className=" text-light w-50">
                        <h3 className="text-danger">Login/Register Screen:-</h3>

                        <h5 className="ms-5 text-primary mt-3">The user is greeted with a welcome screen offering two options:</h5>

                        <ul>
                            <li className="mt-4"> <span className="fs-5 fw-bold text-danger">Login:-</span> <span className="">For existing users to enter their credentials (email/username and password).</span>
                            </li>
                            <li className="mt-3"> <span className="fs-5 fw-bold text-danger">Register:-</span> For new users to create an account by providing details like name, email, password, and phone number (optional).</li>
                        </ul>
                    </div>
                </div>
                <Link to='/' className="position-fixed bottom-0 end-0 btn btn-link">
                    Back To Home
                </Link>
            </div>

        </div>
    )
}