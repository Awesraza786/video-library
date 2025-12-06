import { Footer1 } from "./footer-1";
import { Header } from "./header";
import { VideosTemplate } from "./section-1";


export function Template() {
    return (
        <div className="">
            <Header />
            <VideosTemplate />
            <Footer1 />
            {/* <div>
                <span className="bi bi-chevron-up text-light fs-5 bg-warning p-2 rounded rounded-3 position-fixed " style={{ top: '500px', left: '96%' }}></span>
            </div> */}
        </div>
    )
}