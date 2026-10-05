import SideBannerImg from "../../assets/img/banner1.jpeg";
import SideBannerImg2 from "../../assets/img/banner2.jpeg";



export default function Banner() {
    return (
    <div className="banner-container">
        <img
            src={SideBannerImg}
            alt="Vertical Banner"
            className="img-fluid rounded-2 shadow-sm w-100 h-auto mt-2"
        />
        <img
            src={SideBannerImg2}
            alt="Vertical Banner"
            className="img-fluid rounded-2 shadow-sm w-100 h-auto mt-2"
        />
    </div>  
    
    )
}