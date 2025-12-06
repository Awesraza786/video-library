import { Cart } from "./cart";


export function VideosTemplate() {
    return (
        <div>
            <div className="d-flex flex-wrap">
                <Cart h='HTML+CSS ' src='html.png' width='100%' height='350px' />
                <Cart h='JAVASCRIPT' src='JS.png' width='100%' height='300px' style={{ marginTop: '50px', }} />
                <Cart h='REACT' src='react.png' width='100%' height='250px' style={{ marginTop: '100px', }} />
                <Cart h='NODE JS' src='nodejs.jpeg' width='100%' height='200px' style={{ marginTop: '150px', }} />
            </div>
            <div className="bg-all"></div>

        </div>
    )
}