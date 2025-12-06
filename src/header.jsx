import { VideosTemplate } from "./section-1";

export function Header() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div >
                <span className="first">R</span><span className="second">AZA</span>
            </div>
            <div>
                <span className="multipurpose">Multipurpose</span><span className="Streaming"> Video Streaming</span>
            </div>
            <div className="mt-5">
                <span className="btn btn-success rounded rounded-3 fs-4 p-2  text-dark btnpurchase">Purchase Now</span>
                <span className="btn btn-light ms-5 p-2 fs-4 rounded rounded-3 btndemo">Check Demo</span>
            </div>
        </div>
    )
}