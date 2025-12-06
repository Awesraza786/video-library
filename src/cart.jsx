import { Link } from "react-router-dom";


export function Cart(props) {
    // function handleLoginClick(){

    // }
    return (
        <div style={props.style} >
            <Link to='/main' >
                <div style={{ width: '300px', padding: '25px' }} className="carthover" >
                    <h1 className="border-bottom pb-2 border-4 border-success text-light  text-center">{props.h}</h1>
                    <div>
                        <img src={props.src} className="rounded rounded-2 cartimg mt-3" width={props.width} height={props.height} alt="" />

                    </div>
                </div>
            </Link>
        </div>
    )
}